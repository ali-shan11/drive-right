import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-frsc-assessment',
  imports: [CommonModule, DialogModule, ButtonModule],
  templateUrl: './frsc-assessment.html',
  styleUrl: './frsc-assessment.scss',
})
export class FrscAssessment {
  private router = inject(Router);

  visible = signal(true);
  @Output() onClose = new EventEmitter<boolean>();
  closeModal() {
    this.visible.set(false);
    this.onClose.emit(false);
  }

  startTheoryExam(){
    this.router.navigate(['/official-theory-exam']);
  }
}
