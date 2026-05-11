import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceVerification } from './face-verification';

describe('FaceVerification', () => {
  let component: FaceVerification;
  let fixture: ComponentFixture<FaceVerification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceVerification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceVerification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
