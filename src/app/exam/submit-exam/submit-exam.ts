import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-submit-exam',
  imports: [CommonModule, DialogModule, ButtonModule],
  templateUrl: './submit-exam.html',
  styleUrl: './submit-exam.scss',
})
export class SubmitExam {
  visible = signal(true);
  
 // receives data from Exam component
  @Input() answers: Record<number, number> = {};
  @Input() flagged: number[] = [];
  @Input() totalCount: number = 0;

// tells Exam component which button was clicked
  @Output() submitConfirmed = new EventEmitter<void>();
  @Output() reviewClicked = new EventEmitter<void>();

  //Close the modal
  closeModal(){
    this.visible.set(false);
  }

  // count of answered questions
  get answeredCount(): number {
    return Object.keys(this.answers).length;
  }

  // count of unanswered questions
  get unansweredCount(): number {
    return this.totalCount - this.answeredCount;
  }

  // count of flagged questions
  get flaggedCount(): number {
    return this.flagged.length;
  }

  onSubmit(): void {
    this.submitConfirmed.emit();
  }

  onReview(): void {
    this.reviewClicked.emit();
  }
}
