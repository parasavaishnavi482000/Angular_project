import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from './task.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-six-combine',
  imports:[FormsModule,CommonModule],
  templateUrl: './six-combine.component.html',
  styleUrls: ['./six-combine.component.css']
})
export class SixCombineComponent implements OnInit, OnDestroy {
  tasks: string[] = [];
  newTask = '';
  taskSubscription!: Subscription;

  constructor(private taskService: TaskService) {
    console.log('Constructor called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.taskSubscription = this.taskService.task$.subscribe(data => {
      this.tasks = data;
    });
  }

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    this.taskSubscription.unsubscribe();
  }
}
