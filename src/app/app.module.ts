import { AppRoutingModule } from './app-routing.module';



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ProfileComponent } from './profile/profile.component';
import { EmailComponent } from './email/email.component';
import { ListaCosasComponent } from './components/lista-cosas/lista-cosas.component';
import { NuevaCosaComponent } from './components/nueva-cosa/nueva-cosa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
 // Copy the firebaseConfig from your created project on the firebase console. Here, click on the project name and then on the project dashboard, click on Add firebase to your web app. Replace the values below with yours, values below will not work for you because I have removed some characters from it.
 const firebaseConfig = {
  apiKey: "AIzaSyDzj8o4rP45C5QpPhh2fAEaurxiS9fGJFc",
  authDomain: "gmsoft-4fdec.firebaseapp.com",
  projectId: "gmsoft-4fdec",
  storageBucket: "gmsoft-4fdec.appspot.com",
  messagingSenderId: "558894781245",
  appId: "1:558894781245:web:f4aab12203cdb3d8aeab54",
  measurementId: "G-6QDD0LZR2S"
};
 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
@NgModule({
declarations: [
AppComponent,
HomepageComponent,
LoginpageComponent,
SignUppageComponent,
ProfileComponent,
EmailComponent,
ListaCosasComponent,
NuevaCosaComponent,
NavbarComponent
],
imports: [
  BrowserModule,
  FormsModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireAuthModule,
  AppRoutingModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
