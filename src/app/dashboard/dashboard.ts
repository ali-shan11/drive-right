import { Component, signal } from '@angular/core';
import { BannerCard } from '../interfaces/banner-card';

import { RoundProgressComponent } from 'angular-svg-round-progressbar';
import { DriveAid } from '../interfaces/drive-aid';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule , RoundProgressComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
   cards: BannerCard[] = [
    {
      id: 1,
      title: 'Book your Official Driving Test and Certification Exam',
      ctaText: 'Register Now',
      bgGradient: 'linear-gradient(180deg, #39B4CC 0%, rgba(170, 183, 191, 0.4) 100%)',
      cardImage: 'images/dashboard/certifications.svg',
    },
    {
      id: 2,
      title: 'Introduction to Lagos Driving Aid',
      ctaText: 'Start Learning',
      bgGradient: 'linear-gradient(180deg, #E05A2B 0%, rgba(120, 40, 10, 0.8) 100%)',
      cardImage: 'images/dashboard/start-learning.svg',
    },
    {
      id: 3,
      title: "You're on your way to mastering the road.",
      ctaText: 'View Courses',
      bgGradient: 'linear-gradient(180deg, #4CAF50 0%, rgba(30, 100, 30, 0.8) 100%)',
      cardImage: 'images/dashboard/trophy.svg',
    },
    {
      id: 4,
      title: 'Lagos Road Signs & Traffic Signals',
      ctaText: 'Continue Reading',
      bgGradient: 'linear-gradient(180deg, #C8A000 0%, rgba(100, 70, 0, 0.8) 100%)',
      cardImage: 'images/dashboard/clipboard.svg',
    },
    {
      id: 5,
      title: 'Car Safety and Mechanics',
      ctaText: 'Continue Reading',
      bgGradient: 'linear-gradient(180deg, #9B72CB 0%, rgba(60, 30, 100, 0.8) 100%)',
      cardImage: 'images/dashboard/clipboard.svg',
    },
  ];

  //ProgressBar Code
  runningCourses = signal<number>(6);
  total = signal<number>(100);
  progress = signal<number>(35);

  driveAids: DriveAid[] = [
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
  ];
}
