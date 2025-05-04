import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-marks',
  imports:[CommonModule],
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css']
})
export class StudentMarksComponent {
  student: any;
  marks: any;

  constructor(private authService: AuthService, private router: Router) {
    const data = localStorage.getItem('student');
    const parsed = data ? JSON.parse(data) : null;
    this.student = parsed;
    this.marks = parsed?.marks || {};
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/register']);
  }
}
