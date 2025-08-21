import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'; //WITHOUT THIS app wont start

import { App } from './app';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';

@NgModule({
  declarations: [App],
  // con bootstrap indicamos cual es nuestro root component
  bootstrap: [App],

  //remember to import BrowserModule
  imports: [
    CommonModule, Header, User, Tasks, BrowserModule
  ]
})
export class AppModule { }
