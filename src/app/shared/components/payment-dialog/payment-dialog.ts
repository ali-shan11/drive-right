import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-payment-dialog',
  imports: [DialogModule, ButtonModule, CommonModule],
  templateUrl: './payment-dialog.html',
  styleUrl: './payment-dialog.scss',
})
export class PaymentDialog {
  totalSteps = 5;
  currentStep = signal(0);
  visible = signal(true);
  @Input() finalBtnText: string = 'Pay Now';
  @Output() onClose = new EventEmitter<boolean>();

  stepConfig = [
  {
    title: 'Payment Details',
    image: 'var(--payment-details-image)'
  },
  {
    title: 'Select a Payment Method',
    image: 'var(--payment-details-image)'
  },
  {
    title: 'Bank Transfer',
    image: 'var(--bank-transfer-image)'
  },
  {
    title: 'Pay with Card',
    image: 'var(--card-payment-image)'
  },
  {
    title: 'Payment Details',
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
