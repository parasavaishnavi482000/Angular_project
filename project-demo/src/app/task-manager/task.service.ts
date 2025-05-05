import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

 // Example
private apiUrl = 'http://localhost:3000/api/tasks'; // If your backend runs on port 3000
// Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getTasks(): void {
    this.http.get<Task[]>(this.apiUrl)
      .pipe(catchError(this.handleError))
      .subscribe((tasks) => this.tasksSubject.next(tasks));
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task).pipe(catchError(this.handleError));
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task).pipe(catchError(this.handleError));
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('Service Error:', error);
    return throwError(() => new Error('Something went wrong, please try again later.'));
  }
}
