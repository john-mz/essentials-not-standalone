import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'; //WITHOUT THIS app wont start
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { Task } from './tasks/task/task';
import { NewTask } from './tasks/new-task/new-task';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [App, Header, User, Tasks, Task, NewTask], //modules
  // con bootstrap indicamos cual es nuestro root component
  bootstrap: [App], //root

  //remember to import BrowserModule              
  imports: [
    CommonModule, BrowserModule, FormsModule, SharedModule
  ]
  // BrowserModule ya incluye DatePipe
})
export class AppModule { }
