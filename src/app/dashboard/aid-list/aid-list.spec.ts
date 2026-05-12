import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AidList } from './aid-list';

describe('AidList', () => {
  let component: AidList;
  let fixture: ComponentFixture<AidList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AidList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AidList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
