// state-management.component.ts
import { Component } from '@angular/core';
import { StateManagementService } from '../state-management.service';
@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrls: ['./state-management.component.css']
})
export class StateManagementComponent {
  counter = 0;

  constructor(private stateService: StateManagementService) {
    // Subscribe to the counter observable from the service
    this.stateService.counter$.subscribe(value => {
      this.counter = value;
    });
  }

  increment() {
    this.stateService.increment();  // Call service to increment counter
  }

  decrement() {
    this.stateService.decrement();  // Call service to decrement counter
  }
}
