import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interactive-session-chapter',
  imports: [CommonModule],
  templateUrl: './interactive-session-chapter.html',
  styleUrl: './interactive-session-chapter.scss',
})
export class InteractiveSessionChapter {
  currentIndex = 0;
  selectedIndex: number | null = null;
  answered = false;
  questions = [
    {
      question: 'Identify the road sign',
      image: 'images/courses/road-sign.svg',
      options: ['Turn Left', 'Sharp Bend To The Left', 'Left Lane Ends', 'Merge Left'],
      correctIndex: 0,
    },
    {
      question: 'Identify the road sign',
      image: 'images/courses/road-sign.svg',
      options: ['Merge Left', 'Sharp Bend To The Left', 'Left Lane Ends', 'Turn Left'],
      correctIndex: 3,
    },
    {
      question: 'Identify the road sign',
      image: 'images/courses/road-sign.svg',
      options: ['Left Lane Ends', 'Sharp Bend To The Left', 'Turn Left', 'Merge Left'],
      correctIndex: 2,
    },
    {
      question: 'Identify the road sign',
      image: 'images/courses/road-sign.svg',
      options: ['Right Lane Ends', 'Turn Left', 'Left Lane Ends', 'Merge Left'],
      correctIndex: 1,
    },
  ];

 get current() {
    return this.questions[this.currentIndex];
  } 


  get isFirst() { return this.currentIndex === 0; }
  get isLast()  { return this.currentIndex === this.questions.length - 1; }

  getLabel(i: number): string {
    return String.fromCharCode(65 + i); // A, B, C, D
  }

  select(index: number): void {
    if (this.answered) return;
    this.selectedIndex = index;
    this.answered = true;
  }

  prev(): void {
    if (this.isFirst) return;
    this.currentIndex--;
  }

  next(): void {
    if (this.isLast) return;
    this.currentIndex++;
  }

}
