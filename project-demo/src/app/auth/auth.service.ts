import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  authStatus$ = this.isAuthenticated.asObservable();

  login() {
    this.isAuthenticated.next(true);
  }

  logout() {
    this.isAuthenticated.next(false);
  }

  isLoggedIn() {
    return this.isAuthenticated.getValue();
  }
}
