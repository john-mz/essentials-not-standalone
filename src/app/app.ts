import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

// el decorador es la metadata de esta clase (la "class App" de abajo)
@Component({
  selector: 'app-root',
  // los imports = [] se eliminan cuando standalone = false
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  selectedUserId?: String;
  
  get selectedUser(){
    return this.users.find((user) => user.id == this.selectedUserId);
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }
}
