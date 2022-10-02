import {Directive, HostBinding} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {filter, takeUntil, tap} from "rxjs/operators";
import {Subject} from "rxjs";

@Directive({
  selector: '[ifAuthenticated]',
})
export class IfAuthenticatedDirective {
  private readonly destroy$: Subject<void> = new Subject();

  constructor(private router: Router, private authService: AuthService) {
    router.events.pipe(
      takeUntil(this.destroy$),
      filter((event) => event instanceof NavigationEnd),
      tap(() => {
        this.isHidden = !this.authService.isAuthenticated;
      })
    ).subscribe()
  }

  @HostBinding('class.hidden') isHidden: boolean;

  ngOnDestroy() {
    console.log('destroyed')
    this.destroy$.next()
    this.destroy$.unsubscribe()
  }
}
