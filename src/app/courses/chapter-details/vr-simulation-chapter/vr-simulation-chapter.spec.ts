import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrSimulationChapter } from './vr-simulation-chapter';

describe('VrSimulationChapter', () => {
  let component: VrSimulationChapter;
  let fixture: ComponentFixture<VrSimulationChapter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VrSimulationChapter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VrSimulationChapter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
