import { Component, signal } from '@angular/core';
import { CourseModule } from '../../interfaces/course-module';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-modules',
  imports: [CommonModule, RoundProgressComponent],
  templateUrl: './course-modules.html',
  styleUrl: './course-modules.scss',
})
export class CourseModules {
 total = signal<number>(100);
  modules: CourseModule[] = [
     {
       id: 1,
       title: 'Round Abouts',
       subtitle:
         "Explore the dynamics of Lagos' most notable roundabouts. Always yield to the left.",
       buttonLabel: 'Explore Lagos Roundabouts',
       progress: 12,
       svgIcon: '',
       currentProgress : 27
 
     },
     {
       id: 2,
       title: 'Intersections',
       subtitle:
         'Practice reading LASTMA hand signals and navigating major light-controlled junctions.',
       buttonLabel: 'Explore Lagos Intersections',
       progress: 0,
       svgIcon: '',
       currentProgress : 68
     },
     {
       id: 2,
       title: 'Intersections',
       subtitle:
         'Practice reading LASTMA hand signals and navigating major light-controlled junctions.',
       buttonLabel: 'Explore Lagos Intersections',
       progress: 0,
       svgIcon: '',
       currentProgress : 68
     },
     {
       id: 3,
       title: 'Expressway U-Turns',
       subtitle:
         'Practice reading LASTMA hand signals and navigating major light-controlled junctions.',
       buttonLabel: 'Explore Lagos U Turn',
       progress: 0,
       svgIcon: '',
       currentProgress : 68
     },
      {
       id: 4,
       title: 'Bridges',
       subtitle:
         'Understand lane disciplines, car breakdown protocols, and hazard perception over water.',
       buttonLabel: 'Explore Lagos Bridges',
       progress: 0,
       svgIcon: '',
       currentProgress : 68
     },
   ];
}
