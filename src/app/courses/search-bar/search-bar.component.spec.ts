import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
  it('handleSearch should log the input value', () => {
    const button = fixture.debugElement.query(By.css('button'));
    
    component.search = 'aboba';
    spyOn(component, 'handleSearch').and.callThrough();
    spyOn(console, 'log');
    button.triggerEventHandler('click', '');
    expect(component.handleSearch).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledOnceWith(component.search);
  });
});
