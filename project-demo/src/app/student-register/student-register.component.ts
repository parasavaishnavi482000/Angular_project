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
  maths: any = '';
  english: any = '';
  science: any = '';

  constructor(private router: Router, private authService: AuthService) {}

  register() {
    if (this.studentName && this.studentID) {
      const studentData = {
        name: this.studentName,
        id: this.studentID,
        marks: {
          maths: this.maths,
          english: this.english,
          science: this.science
        }
      };
      localStorage.setItem('student', JSON.stringify(studentData));
      alert('Student Registration Successful');
      this.authService.login();
      this.router.navigate(['/marks']);
    } else {
      alert('All fields required!');
    }
  }
}

