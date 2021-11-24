import { Component, OnInit } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {
  
  auth = new FirebaseTSAuth();

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(
      this.loggedIn()
      &&
      !this.emailVerified()
      // !this.auth.getAuth().currentUser.emailVerified
    ) {
      alert("email NO verificado");
      this.auth.sendVerificationEmail();
    } else {
      alert("email verificado");
      this.router.navigate(["landing"]);
    } 
  }
  
  loggedIn(){
    return this.auth.isSignedIn();
  }

  emailVerified(){
    return this.auth.isEmailVerified();
  }
}
