import { Component, OnInit } from '@angular/core';
import { Course } from 'src/Course';
import { FilterPipe } from '../pipes/filter.pipe';

const mockedCourses = [
  {
    title: 'Video Course 1. Name Tag',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, minus asdasdasdasdasdasdsdasdasdasdasdasdasd',
    id: '7ebdc-5rbd2-3bop2',
    creationDate: new Date('5/09/2012'),
    duration: 22,
    topRated: false,
  },
  {
    title: 'Video Course 2. Name Tag',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, minus asdasdasdasdasdasdsdasdasdasdasdasdasd',
    id: '7ebdc-5rbd2-3bop2',
    creationDate: new Date('06/11/2022'),
    duration: 185,
    topRated: true,
  },
  {
    title: 'Video Course 3. Name Tag',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, minus asdasdasdasdasdasdsdasdasdasdasdasdasdasdasdasdasdasddddddddddddddddddddddd',
    id: '7ebdc-5rbd2-3bop2',
    creationDate: new Date('10/09/2022'),
    duration: 300,
    topRated: false,
  },
];

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log('onInit');
    this.courses = mockedCourses;
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
    console.log(id);
  }

  handleSearch(search: string) {
    if (search === '') {
      this.courses = mockedCourses;
      return;
    }
    this.courses = new FilterPipe().transform(mockedCourses, search);
  }
}
