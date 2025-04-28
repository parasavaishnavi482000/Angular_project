
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
     this.stateService.counter$.subscribe(value => {
      this.counter = value;
    });
  }

  increment() {
    this.stateService.increment();  
  }

  decrement() {
    this.stateService.decrement();  
  }
}
