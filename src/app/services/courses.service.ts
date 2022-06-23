import {Injectable} from '@angular/core';
import {Course} from 'src/app/shared/Course.interface';
import {BehaviorSubject} from 'rxjs';
import {coursesList} from "../../mocks/courses";

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private _list: Course[] = coursesList;

  list = new BehaviorSubject(this._list);

  getCourses() {
    this.list.next(this._list);
  }

  deleteCourse(id: string) {
    this._list = this._list.filter((c) => c.id !== id);
    this.list.next(this._list);
  }

  getCourseById(id: string) {
    return this._list.find((c) => c.id === id);
  }

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
