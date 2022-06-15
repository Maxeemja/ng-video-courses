import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  email: string;
  password: string;

  constructor(private logService: AuthService) {
  }


  onSubmit() {
    if(!this.email || !this.password) return alert('all fields are required!')
    this.logService.login(this.email)
  }
}
