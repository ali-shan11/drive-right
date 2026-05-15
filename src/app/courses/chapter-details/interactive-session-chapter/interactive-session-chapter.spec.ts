import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveSessionChapter } from './interactive-session-chapter';

describe('InteractiveSessionChapter', () => {
  let component: InteractiveSessionChapter;
  let fixture: ComponentFixture<InteractiveSessionChapter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveSessionChapter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveSessionChapter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
