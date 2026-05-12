import { Component } from '@angular/core';
import { Course } from '../../interfaces/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.scss',
})
export class CourseDetail {
  courses: Course[] = [
    {
      id: 1,
      title: 'Allen Avenue Roundabout',
      subtitle: 'Known for complex multi-lane entries and aggressive commercial bus merging.',
      keySkill: 'Lane commitment and clear signaling',
      imageUrl: 'images/dashboard/roundabout.svg',
      difficulty: 'Hard',
      location: 'Ikeja, Lagos',
    },
    {
      id: 2,
      title: 'Ikorodu Road Circle',
      subtitle: 'High-volume arterial roundabout with frequent pedestrian crossing conflicts.',
      keySkill: 'Yielding discipline and mirror awareness',
      imageUrl: 'images/dashboard/roundabout.svg',
      difficulty: 'Medium',
      location: 'Lagos Mainland',
    },
    {
      id: 3,
      title: 'Ojota Interchange',
      subtitle: 'Complex interchange with multiple slip roads and heavy articulated vehicles.',
      keySkill: 'Speed management and gap acceptance',
      imageUrl: 'images/dashboard/roundabout.svg',
      difficulty: 'Hard',
      location: 'Ojota, Lagos',
    },
    {
      id: 4,
      title: 'Maryland Junction',
      subtitle: 'Busy multi-lane circle with peak-hour gridlock and motorbike weaving.',
      keySkill: 'Patience and assertive positioning',
      imageUrl: 'images/dashboard/roundabout.svg',
      difficulty: 'Medium',
      location: 'Maryland, Lagos',
    },
  ];
}
