import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LandingComponent } from './pages/landing/landing.component';


const routes: Routes = [
  // {path:"**", component: HomeComponent},
  {path:'', component: HomeComponent},
  {path:'auth', component: AuthenticatorComponent},
  {path: 'emailVerification', component: EmailVerificationComponent},
  {path: 'landing', component: LandingComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
