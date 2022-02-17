import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private presenterAjoutTache = false;
  private subject: Subject<any> = new Subject<any>();


  constructor() { }

  toggleAddTask(): void {
    this.presenterAjoutTache = !this.presenterAjoutTache;
    this.subject.next(this.presenterAjoutTache);
    console.log('PRESENTER', this.presenterAjoutTache);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
