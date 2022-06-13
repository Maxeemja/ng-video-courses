import { HighlightBorderDirective } from './highlight-border.directive';
let elRefMock = {
  nativeElement: document.createElement('div')
};

describe('HighlightBorderDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightBorderDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
