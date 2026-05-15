import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialExam } from './official-exam';

describe('OfficialExam', () => {
  let component: OfficialExam;
  let fixture: ComponentFixture<OfficialExam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficialExam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficialExam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
