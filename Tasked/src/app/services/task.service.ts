import { Injectable } from '@angular/core';
import {Task} from '../task';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3083/tasks';

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
  return this.httpClient.get<Task[]>(this.apiUrl);
  }

  deleteSpecificTask(task: Task): Observable<Task> {
    const deleteUrl = `${this.apiUrl}/${task.id}`;
    console.log(deleteUrl);
    return this.httpClient.delete<Task>(deleteUrl);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl, task, httpOptions);
  }
}
