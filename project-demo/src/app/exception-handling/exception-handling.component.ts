import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-exception-handling',
  standalone: true,
  imports: [CommonModule,HttpClientModule], 
  templateUrl: './exception-handling.component.html',
  styleUrls: ['./exception-handling.component.css']
})
export class ExceptionHandlingComponent {
  constructor(private http: HttpClient) {}

  simulateFrontendError() {
    try {
   
      throw new Error('This is a simulated frontend error!');
    } catch (error) {
      console.error('Frontend Error:', error);
      alert('Frontend Error Caught!');
    }
  }

  simulateApiCall() {
    
    this.http.get('http://localhost:3000/error-endpoint').subscribe({
      next: (res) => console.log(res),
      error: (err) => {
        console.error('Backend API Error:', err);
        alert('Backend Error Handled in Frontend!');
      }
    });
  }

 
  simulateGlobalError() {
    try {
      throw new Error('This is a simulated global error!');
    } catch (error) {
      console.error('Global Error:', error);
      alert('Global Error Caught!');
    }
  }
}