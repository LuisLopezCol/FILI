import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticatorComponent } from 'src/app/tools/authenticator/authenticator.component';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  auth = new FirebaseTSAuth();
  
  constructor(private loginSheet: MatBottomSheet, private router: Router) { }
  
  ngOnInit(): void {
    if (this.loggedIn()){
      this.router.navigate(["landing"]);
    }
  }

  loggedIn(){
    return this.auth.isSignedIn();
  }
  

  onGetStartedClick(): void{
    this.loginSheet.open(AuthenticatorComponent);
  }
  
}