import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
 // Property for interpolation binding
 title = 'Angular Data Binding Example';

 // Property for property binding
 imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';

 // Property for two-way binding
 username = '';

 // Method for event binding
 onClick() {
   alert('Button clicked!');
 }
}