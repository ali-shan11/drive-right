import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCompleted } from './course-completed';

describe('CourseCompleted', () => {
  let component: CourseCompleted;
  let fixture: ComponentFixture<CourseCompleted>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCompleted]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCompleted);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
