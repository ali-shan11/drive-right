import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMockAssessment } from './start-mock-assessment';

describe('StartMockAssessment', () => {
  let component: StartMockAssessment;
  let fixture: ComponentFixture<StartMockAssessment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartMockAssessment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartMockAssessment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
