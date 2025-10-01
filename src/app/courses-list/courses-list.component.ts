import { Component } from '@angular/core';
import { NgStyle } from '../../../node_modules/@angular/common/common_module.d-NEF7UaHr';

@Component({
  selector: 'app-courses-list',
  imports: [NgStyle],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css',
})
export class CourseslistComponent {
  title: string = 'Available Courses';

  courses = [
    {
      id: 1,
      title: 'Angular Basics',
      description: 'Learn the basics of Angular.',
      price: 49,
      date: '2025-03-25',
      soldOut: false,
      img: 'Angular_icon.png',
    },
    {
      id: 2,
      title: 'Advanced Angular',
      description: 'Deep dive into Angular features.',
      price: 22,
      date: '2025-01-22',
      soldOut: true,
      img: 'Angular_icon.png',
    },
    {
      id: 3,
      title: 'RxJS in Angular',
      description: 'Understand reactive programming with RxJS.',
      price: 89,
      date: '2025-11-25',
      soldOut: false,
      img: 'Angular_icon.png',
    },
  ];

  viewDetails(title: string): void {
    alert(`More details about ${title} coming soon!`);
  }
}
