import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlightBorder]',
})
export class HighlightBorderDirective implements OnInit {
  currDate = new Date();
  @Input() highlightBorder: Date;
  creationDate: Date;
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    this.creationDate = this.highlightBorder;
    if (this.creationDate > this.currDate) {
      this.el.nativeElement.style.border = '2px solid blue';
    }
    if (
      this.creationDate < this.currDate &&
      this.creationDate >= new Date(Date.now() - 1209600000)
    ) {
      this.el.nativeElement.style.border = '2px solid green';
    }
  }

}
