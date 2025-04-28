// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

//   constructor(private authService: AuthService, private router: Router) {}

//   login(): void {
//     this.authService.login();
//     this.router.navigate(['/dashboard']);
//   }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports:[FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

 login(): void {
  if (this.password === '1234') {
    this.authService.login();
    this.router.navigate(['/dashboard']);
  } else {
    alert('Incorrect password!');
  }
}
}



