import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-courses-list',
  imports: [NgStyle, DatePipe, CurrencyPipe],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css',
})
export class CourseslistComponent implements OnInit {
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
      onSale: false,
    },
    {
      id: 2,
      title: 'Advanced Angular',
      description: 'Deep dive into Angular features.',
      price: 22,
      date: '2025-01-22',
      soldOut: true,
      img: 'Angular_icon.png',
      onSale: true,
    },
    {
      id: 3,
      title: 'RxJS in Angular',
      description: 'Understand reactive programming with RxJS.',
      price: 89,
      date: '2025-11-25',
      soldOut: false,
      img: 'RxJS_logo.png',
      onSale: true,
    },
  ];

  ngOnInit(): void {
    console.log('CourseslistComponent initialized');
  }
  viewDetails(title: string): void {
    alert(`More details about ${title} coming soon!`);
  }
}
