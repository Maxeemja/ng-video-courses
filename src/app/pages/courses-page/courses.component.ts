import {Component} from '@angular/core';
import {Course} from 'src/Course';
import {FilterPipe} from '../../pipes/filter.pipe';
import {CoursesService} from '../../services/courses.service';
import {ConfirmBoxEvokeService} from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'courses-page',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$ = this.service.list;

  constructor(private service: CoursesService, private confirmBoxEvokeService: ConfirmBoxEvokeService) {
  }

  handleLoadMore() {
    console.log('load more');
  }

  identify(index: number, item: Course) {
    return item.id;
  }


  handleDelete(id: string) {
    this.confirmBoxEvokeService.danger('Do you really wanna delete this course?', '', 'Delete', 'Cancel')
      .subscribe(resp => {
        if (resp.success) {
          this.service.deleteCourse(id);
        }
      });
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
