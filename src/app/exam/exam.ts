import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SubmitExam } from './submit-exam/submit-exam';

@Component({
  selector: 'app-exam',
  imports: [NgOptimizedImage, NgClass, SubmitExam],
  templateUrl: './exam.html',
  styleUrl: './exam.scss',
})
export class Exam {
  currentIndex = 0;
  // Stores selected option index per question { questionIndex: optionIndex }
  answers: Record<number, number> = {};
  flaggedQuestion = new Set<number>();
  showSubmitExam = false;

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

  get current() {
    return this.questions[this.currentIndex];
  }

  // Returns the saved option index for the current question (or null if unanswered)
  get selectedIndex(): number | null {
    return this.answers[this.currentIndex] ?? null;
  }

  // Checks whether a question (by question index) has been answered
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
    return String.fromCharCode(65 + i); // A, B, C, D
  }

  select(index: number): void {
    if (this.isAnswered(this.currentIndex)) return;
    this.answers[this.currentIndex] = index;
  }

  prev(): void {
    if (this.isFirst) return;
    this.currentIndex--;
  }

  next(): void {
    if (this.isLast) return;
    this.currentIndex++;
  }

  // Calculates answered percentage of total questions
  get progress(): number {
    const answeredCount = Object.keys(this.answers).length;
    return Math.round((answeredCount / this.questions.length) * 100);
  }

  // Toggles flag on the current question
  toggleFlagQuestion(): void {
    if (this.flaggedQuestion.has(this.currentIndex)) {
      this.flaggedQuestion.delete(this.currentIndex);
    } else {
      this.flaggedQuestion.add(this.currentIndex);
    }
  }

  isFlagged(i: number): boolean {
    return this.flaggedQuestion.has(i);
  }

  submitExam(): void {
    this.showSubmitExam = true;
  }
}