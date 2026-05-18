import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-rules',
  imports: [DialogModule, ButtonModule, CommonModule],
  templateUrl: './rules.html',
  styleUrl: './rules.scss',
})
export class Rules {
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
  
  startExam(){
    this.visible.set(false);
    this.onClose.emit(true);
  }
}
