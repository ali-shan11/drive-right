import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-submit-exam',
  imports: [CommonModule , DialogModule , ButtonModule],
  templateUrl: './submit-exam.html',
  styleUrl: './submit-exam.scss',
})
export class SubmitExam {
totalSteps = 5;
  currentStep = signal(0);
  visible = signal(true);
  @Output() onClose = new EventEmitter<boolean>();

  openDialog() {
    this.visible.set(true);
  }

  closeDialog() {
    this.visible.set(false);
    this.onClose.emit(false);
  }

  closeModal(){
    this.visible.set(false);
    this.onClose.emit(false);
  }

}
