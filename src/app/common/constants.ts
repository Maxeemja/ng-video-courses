import { Course } from 'src/Course';
export class Constants {
  public static coursesList: Course[] = [
    {
      title: 'Video Course 1. Name Tag',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, minus asdasdasdasdasdasdsdasdasdasdasdasdasd',
      id: '7ebdc-5rbd2-3bop3',
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
      id: '7ebdc-5rbd2-3bop4',
      creationDate: new Date('10/09/2022'),
      duration: 300,
      topRated: false,
    },
  ];
}
