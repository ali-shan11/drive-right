import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAttempts } from './recent-attempts';

describe('RecentAttempts', () => {
  let component: RecentAttempts;
  let fixture: ComponentFixture<RecentAttempts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentAttempts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentAttempts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
