import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Course } from 'src/Course';
import { By } from '@angular/platform-browser';
import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let course: Course = {
    title: 'Video Course 1. Name Tag',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, minus asdasdasdasdasdasdsdasdasdasdasdasdasd',
    id: '7ebdc-5rbd2-3bop2',
    creationDate: new Date('09.11.2018'),
    duration: 300,
    topRated: true
  };

  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [CourseItemComponent] });
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = course;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should render course title', () => {
    const title: HTMLElement = fixture.nativeElement.querySelector('.title')!;
    expect(title.textContent).toContain('Video Course 1. Name Tag');
  });
  it('should emit onDelete event', () => {
    spyOn(component.onDelete, 'emit')
    const button = fixture.debugElement.query(By.css('.button-group')).children[1];
    button.triggerEventHandler('click', '');
    expect(component.onDelete.emit).toHaveBeenCalledTimes(1);

  })
});
