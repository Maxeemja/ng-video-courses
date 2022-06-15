import {Directive, ElementRef} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Directive({
  selector: '[ifAuthenticated]',
})
export class IfAuthenticatedDirective {
  constructor(private el: ElementRef, private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (this.authService.isAuthenticated) {
          this.el.nativeElement.classList.remove('hidden')
        } else {
          this.el.nativeElement.classList.add('hidden')
        }
      }
    })
  }

}
