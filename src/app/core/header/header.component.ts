import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  userLogin = '';

  constructor(private authService: AuthService, private router: Router) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) this.userLogin = this.authService.getUserInfo()!
    })
  }

  onLogoff(): void {
    this.authService.logout()
  }

}
