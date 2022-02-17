import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {Task} from '../../task';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task>  = new EventEmitter();
  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter<Task>();
  faTime = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task): void{
    console.log(`${task} :: From taks-items`);
    this.deleteTask.emit(task);
  }

  onToggle(task: Task): void {
    this.toggleReminder.emit(task);
  }
}
