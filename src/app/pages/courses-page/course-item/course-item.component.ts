import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../shared/Course.interface';
@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  constructor() { }
  @Input() course: Course;
  @Output() onDelete = new EventEmitter<string>()

  onDeleteCourse(id: string) {
    this.onDelete.emit(id)
  }

}
