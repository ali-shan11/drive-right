import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';
import { DriveAid } from '../../interfaces/drive-aid';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-driving-aid',
  imports: [RoundProgressComponent, CommonModule, RouterLink],
  templateUrl: './driving-aid.html',
  styleUrl: './driving-aid.scss',
})
export class DrivingAid {
  total = signal<number>(100);
  drivingAid: DriveAid[] = [
    {
      id: 1,
      title: 'Round Abouts',
      subtitle:
        "Explore the dynamics of Lagos' most notable roundabouts. Always yield to the left.",
      buttonLabel: 'Explore Lagos Roundabouts',
      progress: 12,
      imageUrl: 'images/dashboard/intersection-module.svg',
    },
    {
      id: 2,
      title: 'Intersections',
      subtitle:
        'Practice reading LASTMA hand signals and navigating major light-controlled junctions.',
      buttonLabel: 'Explore Lagos Intersections',
      progress: 0,
      imageUrl: 'images/dashboard/intersection-module.svg',
    },
    {
      id: 2,
      title: 'Intersections',
      subtitle:
        'Practice reading LASTMA hand signals and navigating major light-controlled junctions.',
      buttonLabel: 'Explore Lagos Intersections',
      progress: 0,
      imageUrl: 'images/dashboard/intersection-module.svg',
    },
    {
      id: 3,
      title: 'Expressway U-Turns',
      subtitle:
        'Practice reading LASTMA hand signals and navigating major light-controlled junctions.',
      buttonLabel: 'Explore Lagos U Turn',
      progress: 0,
      imageUrl: 'images/dashboard/intersection-module.svg',
    },
    {
      id: 4,
      title: 'Bridges',
      subtitle:
        'Understand lane disciplines, car breakdown protocols, and hazard perception over water.',
      buttonLabel: 'Explore Lagos Bridges',
      progress: 0,
      imageUrl: 'images/dashboard/intersection-module.svg',
    },
  ];
}
