import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/Course';
@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  constructor() { }
  @Output() onDelete = new EventEmitter();
  
  ngOnInit(): void {
  }

  transformMinute(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    return hours + 'h ' + minutes + ' min';
  }
}
