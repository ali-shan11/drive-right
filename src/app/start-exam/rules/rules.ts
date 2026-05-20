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

  rules = [
    {
      id : '01',
      title : 'Full-screen Required',
      description : 'The exam must be taken in full-screen mode. Exiting full-screen pauses the exam and triggers a violation warning.'
    },{
      id : '02',
      title : 'Full-screen Required',
      description : 'The exam must be taken in full-screen mode. Exiting full-screen pauses the exam and triggers a violation warning.'
    },{
      id : '03',
      title : 'Full-screen Required',
      description : 'The exam must be taken in full-screen mode. Exiting full-screen pauses the exam and triggers a violation warning.'
    },{
      id : '04',
      title : 'Full-screen Required',
      description : 'The exam must be taken in full-screen mode. Exiting full-screen pauses the exam and triggers a violation warning.'
    },
    {
      id : '05',
      title : 'Full-screen Required',
      description : 'The exam must be taken in full-screen mode. Exiting full-screen pauses the exam and triggers a violation warning.'
    },
    {
      id : '06',
      title : 'Full-screen Required',
      description : 'The exam must be taken in full-screen mode. Exiting full-screen pauses the exam and triggers a violation warning.'
    },
    {
      id : '07',
      title : 'Full-screen Required',
      description : 'The exam must be taken in full-screen mode. Exiting full-screen pauses the exam and triggers a violation warning.'
    },
    {
      id : '08',
      title : 'Full-screen Required',
      description : 'The exam must be taken in full-screen mode. Exiting full-screen pauses the exam and triggers a violation warning.'
    }
  ]

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
