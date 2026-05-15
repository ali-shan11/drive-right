import { Component } from '@angular/core';

@Component({
  selector: 'app-vr-simulation-chapter',
  imports: [],
  templateUrl: './vr-simulation-chapter.html',
  styleUrl: './vr-simulation-chapter.scss',
})
export class VrSimulationChapter {
  vrSimulation : boolean = false;
  startSimulation(){
    this.vrSimulation = true;
  }
}
