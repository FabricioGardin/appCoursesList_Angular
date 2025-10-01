import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseslistComponent } from './courses-list/courses-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseslistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'course-booking-system';
}
