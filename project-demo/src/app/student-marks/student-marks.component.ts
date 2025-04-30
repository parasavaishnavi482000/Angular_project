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
  marks = {
    maths: 92,
    english: 85,
    science: 88
  };

  constructor(private authService: AuthService, private router: Router) {
    const data = localStorage.getItem('student');
    this.student = data ? JSON.parse(data) : null;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/register']);
  }
}
