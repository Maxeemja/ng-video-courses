import {Directive, ElementRef} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Directive({
  selector: '[ifAuthenticated]',
})
export class IfAuthenticatedDirective {
  constructor(private elemRef: ElementRef, private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.authService.isAuthenticated) {
          this.elemRef.nativeElement.classList.remove('hidden')
        } else {
          this.elemRef.nativeElement.classList.add('hidden')
        }
      }
    })
  }

}
