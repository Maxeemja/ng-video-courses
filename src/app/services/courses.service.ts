import { Injectable } from '@angular/core';
import { Course } from 'src/Course';
import { Constants } from '../common/constants';
import { of, BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private _list = Constants.coursesList;

  list = new BehaviorSubject(this._list);

  getCourses() {
    this.list.next(this._list);
  }

  deleteCourse(id: string) {
    this._list = this._list.filter((c) => c.id !== id);
    this.list.next(this._list);
  }

  // getCourseById(id: string) {
  //   return of(this.list).pipe(map((c) => c.find((c) => c.id === id)));
  // }

  addCourse(course: Course) {
    this._list.push(course);
    this.list.next(this._list);
  }
  updateCourse(id: string, newCourse: Course) {
    const idx = this._list.findIndex((c) => c.id === id);
    this._list.splice(idx, 1, newCourse);

    this.list.next(this._list);
  }
}
