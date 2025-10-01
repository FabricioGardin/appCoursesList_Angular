import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseslistComponent } from './courses-list.component';

describe('CourseslistComponent', () => {
  let component: CourseslistComponent;
  let fixture: ComponentFixture<CourseslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseslistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
