import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationStarted } from './simulation-started';

describe('SimulationStarted', () => {
  let component: SimulationStarted;
  let fixture: ComponentFixture<SimulationStarted>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationStarted]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationStarted);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
