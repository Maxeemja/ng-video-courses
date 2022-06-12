import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoursesComponent } from './courses.component';
describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('handleLoadMore should log', () => {
    const button = fixture.debugElement.query(By.css('.more_btn'));
    spyOn(component, 'handleLoadMore').and.callThrough();
    spyOn(console, 'log');
    button.triggerEventHandler('click', '');
    expect(component.handleLoadMore).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledOnceWith('load more');
  });
  // it('handleDelete should log', () => {
  //   let fixture = TestBed.createComponent(CourseItemComponent)
  //   const button = fixture.debugElement.query(By.css('.button-group:last-child'));
  //   console.log(button)
  //   spyOn(component, 'handleDelete').and.callThrough();
  //   spyOn(console, 'log')
  //   button.triggerEventHandler('click', '');
  //   expect(component.handleDelete).toHaveBeenCalledTimes(1)
  //   expect(console.log).toHaveBeenCalledOnceWith('7ebdc-5rbd2-3bop2')
  // });
});
