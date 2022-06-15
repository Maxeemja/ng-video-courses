import {Injectable} from '@angular/core';
import * as uuid from 'uuid';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = !!localStorage.getItem('token')

  constructor(private router: Router) {
  }

  login(email: string) {
    const id = uuid.v4();
    console.log(id)

    this.isAuthenticated = true
    localStorage.setItem('token', id);
    localStorage.setItem('firstName', 'Max');
    localStorage.setItem('login', email)
    this.router.navigate(['/courses']).then(() => {
      console.log('loggen in successfully');
    })
  }

  logout() {
    this.isAuthenticated = false
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    localStorage.removeItem('login')
    this.router.navigate(['/login']).then(() => {
      console.log('logoff');
    })
  }

  getUserInfo() {
    return localStorage.getItem('login');
  }
}
