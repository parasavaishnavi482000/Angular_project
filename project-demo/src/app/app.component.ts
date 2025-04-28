import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, CommonModule, RouterLink, RouterModule, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project-Demo';
  isSidebarCollapsed = true;
   isLoggedIn = false;

   login() {
    this.isLoggedIn = true;
    this.isSidebarCollapsed = true; 
  }
  
  logout() {
    this.isLoggedIn = false;
    this.isSidebarCollapsed = true; 
  }
  
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}