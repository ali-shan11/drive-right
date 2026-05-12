import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Course } from '../interfaces/course';
import { BannerCard } from '../interfaces/banner-card';

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {
  activeTab = 'courses';

  tabs = [
    {
      id: 'courses',
      label: 'Courses',
      imageUrl : 'images/icons/courses.svg'
    },
    {
      id: 'my-notes',
      label: 'My Notes',
      imageUrl : 'images/icons/my-notes.svg'
    },
    {
      id: 'my-bookmarks',
      label: 'My Bookmarks',
      imageUrl : 'images/icons/bookmark.svg'
    },
  ];

  setActive(id: string) {
    this.activeTab = id;
  }

  //Course Cards
  cards: BannerCard[] = [
    {
      id: 1,
      title: 'Total Course Owned 07',
      subtitle: 'All the courses you need to be a pro.',
      ctaText: 'view course List',
      bgGradient: 'linear-gradient(180deg, #39B4CC 0%, rgba(170, 183, 191, 0.4) 100%)',
      cardImage: 'images/dashboard/certifications.svg',
    },
    {
      id: 2,
      title: 'Completed Courses 03',
      subtitle: 'All the courses you need to be a pro.',
      ctaText: 'view List',
      bgGradient: 'linear-gradient(180deg, #39B4CC 0%, rgba(170, 183, 191, 0.4) 100%)',
      cardImage: 'images/dashboard/certifications.svg',
    },
    {
      id: 3,
      title: 'Courses in Progress 04',
      subtitle: 'Jump right back into learning.',
      ctaText: 'Continue',
      bgGradient: 'linear-gradient(180deg, #4CAF50 0%, rgba(30, 100, 30, 0.8) 100%)',
      cardImage: 'images/dashboard/trophy.svg',
    },
  ];

  //Courses List cards
  activeFilter = 'All';
  difficulties = ['All', 'Easy', 'Medium', 'Hard'];
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
    {
      id: 5,
      title: 'Adeniji Adele Roundabout',
      subtitle: 'Older infrastructure roundabout near the marina with tight lane markings.',
      keySkill: 'Spatial awareness and smooth steering',
      imageUrl: 'images/dashboard/roundabout.svg',
      difficulty: 'Easy',
      location: 'Lagos Island',
    },
    {
      id: 6,
      title: 'Costain Roundabout',
      subtitle: 'Entry-level circle connecting the mainland bridge with commercial routes.',
      keySkill: 'Entry timing and right-of-way recognition',
      imageUrl: 'images/dashboard/roundabout.svg',
      difficulty: 'Easy',
      location: 'Costain, Lagos',
    },
    {
      id: 7,
      title: 'Surulere Circle',
      subtitle: 'Residential roundabout prone to informal lane creation during rush hours.',
      keySkill: 'Defensive driving and horn etiquette',
      imageUrl: 'images/dashboard/roundabout.svg',
      difficulty: 'Medium',
      location: 'Surulere, Lagos',
    },
    {
      id: 8,
      title: 'Oshodi Terminus Circle',
      subtitle: 'One of the busiest transport hubs with danfo buses and hawker obstructions.',
      keySkill: 'Hazard scanning and anticipatory braking',
      imageUrl: 'images/dashboard/roundabout.svg',
      difficulty: 'Hard',
      location: 'Oshodi, Lagos',
    },
  ];

  get filteredCourses(): Course[] {
    if (this.activeFilter === 'All') return this.courses;
    return this.courses.filter((c) => c.difficulty === this.activeFilter);
  }

  setFilter(d: string) {
    this.activeFilter = d;
  }

  trackById(_: number, c: Course) {
    return c.id;
  }

  difficultyStyle(difficulty: 'Easy' | 'Medium' | 'Hard'): Record<string, string> {
    const map = {
      Easy: {
        background: 'rgba(34,197,94,0.2)',
        color: '#86efac',
        borderColor: 'rgba(34,197,94,0.4)',
      },
      Medium: {
        background: 'rgba(234,179,8,0.2)',
        color: '#fde047',
        borderColor: 'rgba(234,179,8,0.4)',
      },
      Hard: {
        background: 'rgba(239,68,68,0.2)',
        color: '#fca5a5',
        borderColor: 'rgba(239,68,68,0.4)',
      },
    };
    return map[difficulty];
  }
}
