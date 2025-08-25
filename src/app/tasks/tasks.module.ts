import { NgModule } from '@angular/core';

import { Tasks } from './tasks';
import { NewTask } from './new-task/new-task';
import { Task } from './task/task';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [Tasks, NewTask, Task],
  imports: [FormsModule, CommonModule, SharedModule],
  exports: [Tasks]
})
export class TasksModule { }
