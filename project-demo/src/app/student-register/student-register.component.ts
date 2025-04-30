import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-student-register',
  imports:[CommonModule,FormsModule],
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent {
  studentName = '';
  studentID = '';

  constructor(private router: Router, private authService: AuthService) {}

  register() {
    if (this.studentName && this.studentID) {
      localStorage.setItem('student', JSON.stringify({ name: this.studentName, id: this.studentID }));
      this.authService.login();
      this.router.navigate(['/marks']);
    } else {
      alert('All fields required!');
    }
  }
}
