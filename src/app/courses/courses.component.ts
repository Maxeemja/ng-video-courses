import { Component, OnInit } from '@angular/core';
import { Course } from 'src/Course';
@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log('onInit')
    this.courses = [
      {
        title: 'Video Course 1. Name Tag',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, minus asdasdasdasdasdasdsdasdasdasdasdasdasd',
        id: '7ebdc-5rbd2-3bop2',
        creationDate: new Date('09.11.2018'),
        duration: 300,
      },
      {
        title: 'Video Course 2. Name Tag',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, minus asdasdasdasdasdasdsdasdasdasdasdasdasd',
        id: '7ebdc-5rbd2-3bop2',
        creationDate: new Date('09.11.2018'),
        duration: 185,
      },
      {
        title: 'Video Course 3. Name Tag',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, minus asdasdasdasdasdasdsdasdasdasdasdasdasdasdasdasdasdasddddddddddddddddddddddd',
        id: '7ebdc-5rbd2-3bop2',
        creationDate: new Date('09.11.2018'),
        duration: 300,
      },
    ];
  }
  ngOnChanges() {
    console.log('onChanges');
  }
  handleLoadMore() {
    console.log('load more');
  }
  identify(index: number, item: Course) {
    return item.id;
  }
  handleDelete(id: string) {
    console.log(id)
  }
}
