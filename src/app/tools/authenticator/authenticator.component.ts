import { Component, OnInit } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.css']
})
export class AuthenticatorComponent implements OnInit {
  state = AuthenticatorCompState.LOGIN;
  firebasetsAuth: FirebaseTSAuth;
  
  constructor(private bottomSheetRef: MatBottomSheetRef,
    private router: Router) { 
    this.firebasetsAuth = new FirebaseTSAuth();
  }

  ngOnInit(): void {
  }

  onLogin(
    loginEmail: HTMLInputElement,
    loginPassword: HTMLInputElement,
  ){
    let email = loginEmail.value;
    let password = loginPassword.value;
    if(
      this.isNotEmpty(email) &&
      this.isNotEmpty(password)
    ){
      this.firebasetsAuth.signInWith(
      {
          email: email,
          password: password,
          onComplete: (uc) => {
              this.bottomSheetRef.dismiss();
          },
          onFail: (err) => {
              alert(err);
          }
      }
      );
      this.router.navigate(["landing"]);
    }
  }

  onRegisterClick(
      registerName: HTMLInputElement,
      registerEmail: HTMLInputElement,
      registerPassword: HTMLInputElement,
      registerConfirmPassword: HTMLInputElement
    ){
      let name = registerName.value;
      let email = registerEmail.value;
      let password = registerPassword.value;
      let confirmPassword = registerConfirmPassword.value;
    if(
      this.isNotEmpty(name) &&
      this.isNotEmpty(email) &&
      this.isNotEmpty(password) && 
      this.isNotEmpty(confirmPassword) &&
      this.isAMatch(password, confirmPassword)
    ){
      this.firebasetsAuth.createAccountWith(
      {
        email: email,
        password: password,
        onComplete: (uc) => {
          this.bottomSheetRef.dismiss();
        },
        onFail: (err) => {
          alert("Failed to create the account.");
        }
      });
      this.firebasetsAuth.sendVerificationEmail();
    }
  }

  onResetClick(
    resetEmail: HTMLInputElement
    ){
      let email = resetEmail.value;
      if(
          this.isNotEmpty(email)
        ){
        this.firebasetsAuth.sendPasswordResetEmail(
        {
          email: email,
          onComplete: (err) => {
          this.bottomSheetRef.dismiss();
        }
      });
    }
  }

  isNotEmpty(text: string){
      return text != null && text.length > 0;
  }
  isAMatch(text: string, comparedWith: string){
      return text == comparedWith;
  }
  onLoginClick(){
    this.state = AuthenticatorCompState.LOGIN;
  }
  onForgotPasswordClick(){
  this.state = AuthenticatorCompState.FORGOT_PASSWORD;

  }
  onCreateAccountClick(){
    this.state = AuthenticatorCompState.REGISTER;
    
  }
  isLoginState(){
    return this.state == AuthenticatorCompState.LOGIN;
  }
  isForgotPasswordState(){
    return this.state == AuthenticatorCompState.FORGOT_PASSWORD;
  }
  isRegisterState(){
    return this.state == AuthenticatorCompState.REGISTER;
  }
  getStateText(){
    switch(this.state){
      case AuthenticatorCompState.LOGIN:
        return "Login";
      case AuthenticatorCompState.FORGOT_PASSWORD:
        return "Reset Password";
      case AuthenticatorCompState.REGISTER:
        return "Crate an account";
    }
  }
}

export enum AuthenticatorCompState{
  LOGIN,
  FORGOT_PASSWORD,
  REGISTER
}