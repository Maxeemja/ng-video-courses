import {Component} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {CoursesService} from "../../services/courses.service";
import * as uuiv4 from 'uuid'

@Component({
  selector: 'add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent {
  editMode: boolean = false;
  id: string = '';
  title: string;
  description: string;
  duration: number;
  date: string | null;
  authors: string;

  constructor(private router: Router, private route: ActivatedRoute, private service: CoursesService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!
    if (this.id) {
      this.editMode = true;
      this.service.getCourses()
      const courseToEdit = this.service.getCourseById(this.id)
      const {title, duration, description, creationDate}: any = courseToEdit
      this.title = title
      this.duration = duration
      this.date = creationDate
      this.description = description
    }
  }

  handleCancel() {
    console.log('canceled!')
    this.router.navigate(['/courses']).then()
  }

  onSubmit() {
    if (!this.title || !this.description || !this.duration || !this.date) {
      return alert('all fields are required')
    }
    const course = {
      topRated: false,
      id: this.editMode ? this.id : uuiv4.v4(),
      creationDate: new Date(this.date),
      duration: this.duration,
      title: this.title,
      description: this.description
    }
    if (this.editMode) {
      this.service.updateCourse(this.id, course)
    } else {
      this.service.addCourse(course)
    }
    this.router.navigate(['/courses']).then()
  }

}
