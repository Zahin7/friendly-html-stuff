import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../../task';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() addingTask: EventEmitter<Task> = new EventEmitter<Task>();
  text: string;
  day: string;
  reminder = false;
  showAddTask = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle()
      .subscribe(value => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.text) {
      alert('Ajouter une tâche avant de valider svp');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.addingTask.emit(newTask);

    const empty = '';
    this.text = empty;
    this.day = empty;
    this.reminder = false;

  }
}
