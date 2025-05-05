import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskSubject = new BehaviorSubject<string[]>([]);
  public task$ = this.taskSubject.asObservable();

  addTask(task: string) {
    const currentTasks = this.taskSubject.getValue();
    this.taskSubject.next([...currentTasks, task]);
  }
}
