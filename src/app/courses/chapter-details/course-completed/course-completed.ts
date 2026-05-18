import { CommonModule, NgStyle } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-course-completed',
  imports: [DialogModule, ButtonModule, CommonModule , NgStyle],
  templateUrl: './course-completed.html',
  styleUrl: './course-completed.scss',
})
export class CourseCompleted {
  visible = signal(true);
  @Output() onClose = new EventEmitter<boolean>();

  stepConfig = {
    title: 'Course Completed!',
    image: 'var(--course-complete-image)',
  };
  closeModal(){
    this.visible.set(false);
    this.onClose.emit(false);
  }
}
