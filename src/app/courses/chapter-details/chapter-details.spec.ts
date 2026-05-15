import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterDetails } from './chapter-details';

describe('ChapterDetails', () => {
  let component: ChapterDetails;
  let fixture: ComponentFixture<ChapterDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
