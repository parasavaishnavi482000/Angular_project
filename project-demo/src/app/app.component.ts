import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { ToasterComponent } from './toaster/toaster.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet,CommonModule, RouterLink, RouterModule, RouterLinkActive,ToasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project-Demo';

  // Sidebar and login state
  isSidebarCollapsed = true;
  isLoggedIn = false;

  // Toaster state
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';
  showToast = false;

  // Sidebar/login methods
  login() {
    this.isLoggedIn = true;
    this.isSidebarCollapsed = true;
    this.showSuccessToast('Login successful!');
  }

  logout() {
    this.isLoggedIn = false;
    this.isSidebarCollapsed = true;
    this.showSuccessToast('Logged out successfully.');
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  // Example form submission (can trigger success or error)
  submitForm() {
    const isSuccess = true; // Simulate result

    if (isSuccess) {
      this.showSuccessToast('Form submitted successfully!');
    } else {
      this.showErrorToast('Something went wrong.');
    }
  }

  // Toaster control methods
  showSuccessToast(message: string) {
    this.toastType = 'success';
    this.toastMessage = message;
    this.showToast = true;
    this.autoDismissToast();
  }

  showErrorToast(message: string) {
    this.toastType = 'error';
    this.toastMessage = message;
    this.showToast = true;
    this.autoDismissToast();
  }

  autoDismissToast() {
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }


}
