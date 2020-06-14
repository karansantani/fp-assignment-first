import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, HostBinding } from '@angular/core';
import { trigger, state, style, animation, transition } from '@angular/animations';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent, data: { depth: 1 } },
  { path: 'sign-up', component: SignUpComponent, data: { depth: 2 }  },
];
;
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
