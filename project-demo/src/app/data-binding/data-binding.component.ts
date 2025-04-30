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


 imageUrl = 'https://media.licdn.com/dms/image/v2/D4E0BAQFfxIT9n-nFqg/company-logo_200_200/company-logo_200_200/0/1667394247767/blue_verse_systems_logo?e=2147483647&v=beta&t=ToQQfY6v97Z9JnEpChZA3GnNrcy5Pe11NBycPtt2m5o';

 username = '';

 
 onClick() {
   alert('Button clicked!');
 }
}