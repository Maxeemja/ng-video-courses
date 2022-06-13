import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string;
  password: string;


  constructor(private logService: AuthService) { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log('submit')
    this.logService.login(this.email, this.password)
  }
}
