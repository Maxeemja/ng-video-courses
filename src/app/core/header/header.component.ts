import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {NavigationEnd, Router} from "@angular/router";
import {filter, takeUntil, tap} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  userLogin = '';

  private readonly destroy$: Subject<void> = new Subject();

  constructor(private authService: AuthService, private router: Router) {
    router.events.pipe(
      takeUntil(this.destroy$),
      filter(event => event instanceof NavigationEnd),
      tap(() => {
        this.userLogin = this.authService.getUserInfo()!
      })
    )
      .subscribe()
  }

  onLogoff(): void {
    this.authService.logout()
  }

  ngOnDestroy() {
    console.log('destroyed')
    this.destroy$.next()
    this.destroy$.complete()
  }

}
