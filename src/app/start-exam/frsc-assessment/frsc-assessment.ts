import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-frsc-assessment',
  imports: [CommonModule , DialogModule , ButtonModule],
  templateUrl: './frsc-assessment.html',
  styleUrl: './frsc-assessment.scss',
})
export class FrscAssessment {
  visible = signal(true);
    @Output() onClose = new EventEmitter<boolean>();
    closeModal() {
    this.visible.set(false);
    this.onClose.emit(false);
  }

}
