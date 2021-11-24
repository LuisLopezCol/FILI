import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { FontAwesomeModule } from '@fortawesome/fontawesome-free';

// ----------------- FIREBASE
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from 'src/environments/environment';

// ----------------- MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon'

// ----------------- COMPONENTS 
import { HomeComponent } from './pages/home/home.component';
import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavigationBarComponent } from './tools/navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './tools/footer-bar/footer-bar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CreateComponent } from './pages/create/create.component';
import { JoinComponent } from './pages/join/join.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticatorComponent,
    EmailVerificationComponent,
    NotFoundComponent,
    NavigationBarComponent,
    FooterBarComponent,
    LandingComponent,
    CreateComponent,
    JoinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatBottomSheetModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    FirebaseTSApp.init(environment.firebaseConfig);
  }
}
