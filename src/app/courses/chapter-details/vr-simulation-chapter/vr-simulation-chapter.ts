import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-vr-simulation-chapter',
  imports: [RouterLink],
  templateUrl: './vr-simulation-chapter.html',
  styleUrl: './vr-simulation-chapter.scss',
})
export class VrSimulationChapter {
  vrSimulation : boolean = false;
  startSimulation(){
    this.vrSimulation = true;
  }
}
