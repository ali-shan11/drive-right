import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-exam-date-booking-dialog',
  imports: [FormsModule, DialogModule, ButtonModule, CommonModule, DatePickerModule],
  templateUrl: './exam-date-booking-dialog.html',
  styleUrl: './exam-date-booking-dialog.scss',
})
export class ExamDateBookingDialog {
  date = new Date();
  totalSteps = 5;
  currentStep = signal(0);
  visible = signal(true);
  @Output() onClose = new EventEmitter<boolean>();

  stepConfig = [
    {
      title: 'Choose Your Exam Date',
      desc: 'Choose any date that works for you. Once scheduled, your exam link will be ready on that date.',
      image: 'var(--payment-done-image)'
    },
    {
      title: 'Confirm Examination Schedule',
      desc: 'Your scheduled date is May 24th, 2026. Proceed to Schedule Examination',
      image: 'var(--payment-done-image)'
    },
    {
      title: 'Schedule Confirmed',
      desc: 'Your exam is scheduled. A confirmation email has been sent. Return to this page on your exam date to begin.',
      image: 'var(--payment-done-image)'
    }
  ];

  nextStep(){
    if(this.currentStep() < this.totalSteps - 1){
      this.currentStep.update(v => v + 1);
    }
  }

  previousStep(){
    if(this.currentStep() > 0){
       this.currentStep.update(v => v - 1);
    }
  }

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
  
  payNow(){
    this.visible.set(false);
    this.onClose.emit(true);
  }
}
