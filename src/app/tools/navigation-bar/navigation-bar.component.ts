import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticatorComponent } from '../authenticator/authenticator.component';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  
  auth = new FirebaseTSAuth();
  
  constructor(private loginSheet: MatBottomSheet, 
    private router: Router){

  }
  ngOnInit(): void {
    
  }
  
  onNavLogoClick(){}

  loggedIn(){
    return this.auth.isSignedIn();
  }
  
  onLoginClick(){this.loginSheet.open(AuthenticatorComponent)
  }
  
  onLogoutClick(){this.auth.signOut();
    this.router.navigate([""]);
  }
}

