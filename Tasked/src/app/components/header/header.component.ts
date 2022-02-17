import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Tasks Tracking';
  showAddTask = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => (this.showAddTask = value)
    );
  }

  ngOnInit(): void {
  }

  toggleAddTask(): void {
    console.log('From the header component / passing option ');
    this.uiService.toggleAddTask();
  }
  hasRoute(route: string): boolean  {
    return this.router.url === route;
  }
}
