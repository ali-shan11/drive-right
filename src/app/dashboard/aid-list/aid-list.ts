import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { DriveAid } from '../../interfaces/drive-aid';

@Component({
  selector: 'app-aid-list',
  imports: [CommonModule],
  templateUrl: './aid-list.html',
  styleUrl: './aid-list.scss',
})
export class AidList {
  aidList: DriveAid[] = [
    {
      id: 1,
      title: 'Allen Avenue Roundabout',
      subtitle: 'Known for complex multi-lane entries and aggressive commercial bus merging.',
      keySkill: 'Lane commitment and clear signaling',
      imageUrl: 'images/dashboard/roundabout.svg',
      buttonLabel: 'Read now',
      progress: 20,
    },
    {
      id: 2,
      title: 'Allen Avenue Roundabout',
      subtitle: 'Known for complex multi-lane entries and aggressive commercial bus merging.',
      keySkill: 'Lane commitment and clear signaling',
      imageUrl: 'images/dashboard/roundabout.svg',
      buttonLabel: 'Read now',
      progress: 20,
    },
    {
      id: 3,
      title: 'Allen Avenue Roundabout',
      subtitle: 'Known for complex multi-lane entries and aggressive commercial bus merging.',
      keySkill: 'Lane commitment and clear signaling',
      imageUrl: 'images/dashboard/roundabout.svg',
      buttonLabel: 'Read now',
      progress: 20,
    },
    {
      id: 4,
      title: 'Allen Avenue Roundabout',
      subtitle: 'Known for complex multi-lane entries and aggressive commercial bus merging.',
      keySkill: 'Lane commitment and clear signaling',
      imageUrl: 'images/dashboard/roundabout.svg',
      buttonLabel: 'Read now',
      progress: 20,
    },
    {
      id: 5,
      title: 'Allen Avenue Roundabout',
      subtitle: 'Known for complex multi-lane entries and aggressive commercial bus merging.',
      keySkill: 'Lane commitment and clear signaling',
      imageUrl: 'images/dashboard/roundabout.svg',
      buttonLabel: 'Read now',
      progress: 20,
    },
    {
      id: 6,
      title: 'Allen Avenue Roundabout',
      subtitle: 'Known for complex multi-lane entries and aggressive commercial bus merging.',
      keySkill: 'Lane commitment and clear signaling',
      imageUrl: 'images/dashboard/roundabout.svg',
      buttonLabel: 'Read now',
      progress: 20,
    },
    {
      id: 7,
      title: 'Allen Avenue Roundabout',
      subtitle: 'Known for complex multi-lane entries and aggressive commercial bus merging.',
      keySkill: 'Lane commitment and clear signaling',
      imageUrl: 'images/dashboard/roundabout.svg',
      buttonLabel: 'Read now',
      progress: 20,
    },
    {
      id: 8,
      title: 'Allen Avenue Roundabout',
      subtitle: 'Known for complex multi-lane entries and aggressive commercial bus merging.',
      keySkill: 'Lane commitment and clear signaling',
      imageUrl: 'images/dashboard/roundabout.svg',
      buttonLabel: 'Read now',
      progress: 20,
    },
  ];
}
