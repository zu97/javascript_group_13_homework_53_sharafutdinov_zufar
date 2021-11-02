import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework53';
  tasks = ['Buy milk', 'Walk with dog', 'Do homework'];

  changeTaskText(index: number, event: string) {
    this.tasks[index] = event;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
