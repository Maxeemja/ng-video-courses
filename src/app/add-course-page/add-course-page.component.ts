import {Component} from '@angular/core';

@Component({
  selector: 'add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent {
  title: string;
  description: string;
  duration: number;
  date: Date;
  authors: string;

  handleCancel() {
    console.log('canceled!')
  }

}
