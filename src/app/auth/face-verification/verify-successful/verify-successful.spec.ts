import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifySuccessful } from './verify-successful';

describe('VerifySuccessful', () => {
  let component: VerifySuccessful;
  let fixture: ComponentFixture<VerifySuccessful>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifySuccessful]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifySuccessful);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
