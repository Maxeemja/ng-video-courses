import {Component} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {CoursesService} from "../../services/courses.service";
import * as uuiv4 from 'uuid'
import {FormGroup, FormBuilder, Validators, AbstractControl} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {Course} from "../../shared/Course.interface";


@Component({
  selector: 'add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent {


  editMode: boolean = false;
  courseForm: FormGroup

  id: string = '';

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private coursesService: CoursesService) {
  }


  get duration(): AbstractControl {
    return this.courseForm.get('duration')!;
  }

  get title(): AbstractControl {
    return this.courseForm.get('title')!;
  }

  get description(): AbstractControl {
    return this.courseForm.get('description')!;
  }

  get date(): AbstractControl {
    return this.courseForm.get('date')!;
  }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', Validators.required],
      date: ['', Validators.required],
      authors: ''
    })

    this.id = this.route.snapshot.paramMap.get('id')!

    if (this.id) {
      this.editMode = true;
      this.coursesService.getCourses();
      const courseToEdit = this.coursesService.getCourseById(this.id);
      let {title, duration, description, creationDate}: Course = courseToEdit!;
      const stringDate = new DatePipe('en-US').transform(creationDate, 'yyyy-MM-dd');
      this.courseForm.setValue({
        title: title,
        description: description,
        duration: duration,
        date: stringDate,
        authors: ''
      })
    }
  }

  handleCancel() {
    console.log('canceled!');
    void this.router.navigate(['/courses']);
  }

  onSubmit(): void {
    if (this.courseForm.invalid) {
      return this.courseForm.markAllAsTouched();
    }

    const {date, title, duration, description} = this.courseForm.value;
    const course = {
      topRated: false,
      id: this.editMode ? this.id : uuiv4.v4(),
      creationDate: new Date(date),
      duration: duration,
      title: title,
      description: description
    }

    if (this.editMode) {
      this.coursesService.updateCourse(this.id, course);
    } else {
      this.coursesService.addCourse(course);
    }

    void this.router.navigate(['/courses']);
  }

}
