import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'; //WITHOUT THIS app wont start

import { App } from './app';
import { Header } from './header/header';
import { User } from './user/user';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [App, Header, User], //modules
  // con bootstrap indicamos cual es nuestro root component
  bootstrap: [App], //root

  //remember to import BrowserModule              
  imports: [
    CommonModule, BrowserModule, SharedModule, TasksModule
  ]
  // BrowserModule ya incluye DatePipe
})
export class AppModule { }
