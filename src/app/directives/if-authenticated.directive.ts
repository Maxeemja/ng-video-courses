import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ifAuthenticated]',
})
export class IfAuthenticatedDirective {
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.el.nativeElement.style.display = 'none';
    }
  }
}
