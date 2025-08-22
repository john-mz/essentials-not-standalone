import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required: true}) name?: string;
  @Input({required: true}) userId!: string; //user
  isAddingTask = false;

  // con crear el constructor ya angular sabe q es un servicio y q le toca instanciarlo, angular lo hace debajo de cuerda
  constructor(private TasksService: TasksService){}

  get selectedUserTasks() {
    return this.TasksService.getUserTasks(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

}
