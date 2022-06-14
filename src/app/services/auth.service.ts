import {Injectable} from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;

  login(email: string, password: string) {
    const id = uuid.v4();
    console.log(id)
    localStorage.setItem('token', email);
    localStorage.setItem('firstName', 'Max');
    this.isAuthenticated = true;
    console.log('loggen in successfully');
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    console.log('logoff');
  }

  getUserInfo() {
    return localStorage.getItem('token');
  }
}
