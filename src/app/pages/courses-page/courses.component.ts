import {Component} from '@angular/core';
import {Course} from 'src/Course';
import {FilterPipe} from '../../pipes/filter.pipe';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'courses-page',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$ = this.service.list;

  constructor(private service: CoursesService) {
  }

  handleLoadMore() {

    console.log('load more');
  }

  identify(index: number, item: Course) {
    return item.id;
  }


  handleDelete(id: string) {
    console.log(id);
    if (confirm(`Are you sure you want to delete this course?`)) {
      this.service.deleteCourse(id);
      return;
    }
  }

  handleSearch(search: string) {
    if (search === '') {
      this.service.getCourses();
      return;
    }
    this.courses$.next(
      new FilterPipe().transform(this.courses$.getValue(), search)
    );
  }
}
