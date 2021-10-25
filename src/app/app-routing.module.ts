import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaCosasComponent } from './components/lista-cosas/lista-cosas.component';
import { ProfileComponent } from './profile/profile.component';
import { EmailComponent } from './email/email.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { NuevaCosaComponent } from './components/nueva-cosa/nueva-cosa.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'email-login', component: EmailComponent },
  { path: 'signup', component: SignUppageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'lista-cosas', component: ListaCosasComponent},
  { path: 'nav-bar', component: NavbarComponent},
  { path: 'nueva-cosa', component: NuevaCosaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
