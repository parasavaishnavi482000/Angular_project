import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

 title = 'Angular Data Binding Example';


 imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';


 username = '';

 
 onClick() {
   alert('Button clicked!');
 }
}