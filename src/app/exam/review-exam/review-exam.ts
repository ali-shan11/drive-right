import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-exam',
  imports: [NgOptimizedImage , NgClass],
  templateUrl: './review-exam.html',
  styleUrl: './review-exam.scss',
})
export class ReviewExam {
  currentIndex = 0;
  // from router state on init
  answers: Record<number, number> = {};
  flaggedQuestion = new Set<number>();
  private router = inject(Router);

  questions = [
    {
      id: '01',
      question: 'Identify the road sign',
      image: 'images/courses/road-sign.svg',
      options: ['Turn Left', 'Sharp Bend To The Left', 'Left Lane Ends', 'Merge Left'],
      correctIndex: 0,
    },
    {
      id: '02',
      question: 'Identify the road sign',
      image: 'images/courses/road-sign.svg',
      options: ['Merge Left', 'Sharp Bend To The Left', 'Left Lane Ends', 'Turn Left'],
      correctIndex: 3,
    },
    {
      id: '03',
      question: 'Identify the road sign',
      image: 'images/courses/road-sign.svg',
      options: ['Left Lane Ends', 'Sharp Bend To The Left', 'Turn Left', 'Merge Left'],
      correctIndex: 2,
    },
    {
      id: '04',
      question: 'Identify the road sign',
      image: 'images/courses/road-sign.svg',
      options: ['Right Lane Ends', 'Turn Left', 'Left Lane Ends', 'Merge Left'],
      correctIndex: 1,
    },
  ];

  // reads answers and flagged data passed from Exam
  ngOnInit(): void {
    const state = history.state;
    this.answers = state.answers ?? {};
    this.flaggedQuestion = new Set<number>(state.flagged ?? []);
  }

  get current() {
    return this.questions[this.currentIndex];
  }

  get selectedIndex(): number | null {
    return this.answers[this.currentIndex] ?? null;
  }

  isAnswered(questionIdx: number): boolean {
    return this.answers[questionIdx] !== undefined;
  }

  get isFirst() {
    return this.currentIndex === 0;
  }

  get isLast() {
    return this.currentIndex === this.questions.length - 1;
  }

  getLabel(i: number): string {
    return String.fromCharCode(65 + i);
  }

  prev(): void {
    if (this.isFirst) return;
    this.currentIndex--;
  }

  next(): void {
    if (this.isLast) return;
    this.currentIndex++;
  }

  get progress(): number {
    const answeredCount = Object.keys(this.answers).length;
    return Math.round((answeredCount / this.questions.length) * 100);
  }

  isFlagged(i: number): boolean {
    return this.flaggedQuestion.has(i);
  }

  exitReview(){
    this.router.navigate(['/official-theory-exam'])
  }
}
