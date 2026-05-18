import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-faqs',
  imports: [DialogModule, ButtonModule, CommonModule],
  templateUrl: './faqs.html',
  styleUrl: './faqs.scss',
})
export class Faqs {
  totalSteps = 5;
  currentStep = signal(0);
  visible = signal(true);
  @Output() onClose = new EventEmitter<boolean>();

  openFaqId: string | null = null;

  toggleFaq(id: string) {
    this.openFaqId = this.openFaqId === id ? null : id;
  }

  faqs = [
    {
      id: '01',
      question: 'What are the technical requirement for the online examination?',
      answer:
        'You will need a stable internet connection (minimum 2Mbps), a functional webcam, and a modern web browser (Chrome or Firefox recommended). Ensure your device is fully charged or connected to a power source before starting.',
    },
    {
      id: '02',
      question: 'Full-screen Required',
      answer:
        'The exam must be taken in full-screen mode. Exiting full-screen pauses the exam and triggers a violation warning.',
    },
    {
      id: '03',
      question: 'Full-screen Required',
      answer:
        'The exam must be taken in full-screen mode. Exiting full-screen pauses the exam and triggers a violation warning.',
    },
    {
      id: '04',
      question: 'Full-screen Required',
      answer:
        'The exam must be taken in full-screen mode. Exiting full-screen pauses the exam and triggers a violation warning.',
    },
    {
      id: '05',
      question: 'Full-screen Required',
      answer:
        'The exam must be taken in full-screen mode. Exiting full-screen pauses the exam and triggers a violation warning.',
    },
    {
      id: '06',
      question: 'Full-screen Required',
      answer:
        'The exam must be taken in full-screen mode. Exiting full-screen pauses the exam and triggers a violation warning.',
    },
    {
      id: '07',
      question: 'Full-screen Required',
      answer:
        'The exam must be taken in full-screen mode. Exiting full-screen pauses the exam and triggers a violation warning.',
    },
    {
      id: '08',
      question: 'Full-screen Required',
      answer:
        'The exam must be taken in full-screen mode. Exiting full-screen pauses the exam and triggers a violation warning.',
    },
  ];
  openDialog() {
    this.visible.set(true);
  }

  closeDialog() {
    this.visible.set(false);
    this.onClose.emit(false);
  }

  closeModal() {
    this.visible.set(false);
    this.onClose.emit(false);
  }

  startExam() {
    this.visible.set(false);
    this.onClose.emit(true);
  }
}
