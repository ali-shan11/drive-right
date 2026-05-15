import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryChapter } from './theory-chapter';

describe('TheoryChapter', () => {
  let component: TheoryChapter;
  let fixture: ComponentFixture<TheoryChapter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryChapter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheoryChapter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
