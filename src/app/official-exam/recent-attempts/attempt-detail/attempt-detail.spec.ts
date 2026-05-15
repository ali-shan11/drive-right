import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptDetail } from './attempt-detail';

describe('AttemptDetail', () => {
  let component: AttemptDetail;
  let fixture: ComponentFixture<AttemptDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttemptDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttemptDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
