import { Component, OnInit } from '@angular/core';
import {Task} from '../../task';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
     this.taskService.getTasks().subscribe(
       (tasks) => {
         this.tasks = tasks;
       }
     );

  }

  deleteOneSpecificTask(task: Task): void {
    this.taskService.deleteSpecificTask(task).subscribe(
      () => (this.tasks = this.tasks.filter(x => x.id !== task.id)),
      error => {},
      () => { console.log(task, 'End for tonight' );
      });
  }

  toggleTheReminder(task: Task): void  {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();

  }

  addTask(task: Task): void{

    console.log(task);
    this.taskService.addTask(task).subscribe(
      () => (this.tasks.push(task))
    );
  }
}
