import { IfAuthenticatedDirective } from './if-authenticated.directive';
let elRefMock = {
  nativeElement: document.createElement('div')
};
describe('IfAuthenticatedDirective', () => {
  it('should create an instance', () => {
    const directive = new IfAuthenticatedDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
