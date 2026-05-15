import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseModules } from './course-modules';

describe('CourseModules', () => {
  let component: CourseModules;
  let fixture: ComponentFixture<CourseModules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseModules]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseModules);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
