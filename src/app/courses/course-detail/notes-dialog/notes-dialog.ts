import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-notes-dialog',
  imports: [CommonModule, ButtonModule, DialogModule],
  templateUrl: './notes-dialog.html',
  styleUrl: './notes-dialog.scss',
})
export class NotesDialog {
  totalSteps = 2;
  currentStep = signal(0);
  @Output() onClose = new EventEmitter<boolean>();
  
  visible = signal<boolean>(true);
  stepConfig = {
    title: 'My Notes',
    subtitle: '3 Notes',
    button: 'Create New Note',
  };

  closeModal() {
    this.visible.set(false);
    this.onClose.emit(false);
  }

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

  notes = [
    {
      id : '1',
      title: 'LASTMA Fines to Remember',
      description:
        'Pedestrian crossing violation: ₦5,000 Blood alcohol above 0.05% BAC: ₦50,000 + license suspension Overtaking on solid white line: ₦3,000',
        date : '08 Apr 2026, 09:03 AM'
    },
    {
      id : '2',
      title: 'LASTMA Fines to Remember',
      description:
        'Pedestrian crossing violation: ₦5,000 Blood alcohol above 0.05% BAC: ₦50,000 + license suspension Overtaking on solid white line: ₦3,000',
        date : '08 Apr 2026, 09:03 AM'
    },
  ];
}
