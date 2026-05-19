import { DatePipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RoundProgressComponent } from "angular-svg-round-progressbar";
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-mock-test',
  imports: [DatePipe, NgClass, RoundProgressComponent, ProgressBarModule ],
  templateUrl: './mock-test.html',
  styleUrl: './mock-test.scss',
})
export class MockTest {
  private router = inject(Router);
  public attemptsArr = [
    {
      name: 'FRSC Official Theory CBT',
      examId: 'DRL/EXAM/2026/00847',
      startDate: '2026-05-13T10:12:28.083Z',
      endDate: '2026-05-13T10:30:28.083Z',
      progressReport: 31,
      status: 'Failed',
      questionStats: {
        total: 30,
        correct: 10,
        incorrect: 20,
        blank: 0,
      }
    },
    {
      name: 'FRSC Official Theory CBT',
      examId: 'DRL/EXAM/2026/00847',
      startDate: '2026-05-13T10:12:28.083Z',
      endDate: '2026-05-13T10:30:28.083Z',
      progressReport: 46,
      status: 'Failed',
      questionStats: {
        total: 30,
        correct: 13,
        incorrect: 16,
        blank: 1,
      }
    },
    {
      name: 'FRSC Official Theory CBT',
      examId: 'DRL/EXAM/2026/00847',
      startDate: '2026-05-13T10:12:28.083Z',
      endDate: '2026-05-13T10:30:28.083Z',
      progressReport: 56,
      status: 'Failed',
      questionStats: {
        total: 30,
        correct: 17,
        incorrect: 13,
        blank: 0,
      }
    },
    {
      name: 'FRSC Official Theory CBT',
      examId: 'DRL/EXAM/2026/00847',
      startDate: '2026-05-13T10:12:28.083Z',
      endDate: '2026-05-13T10:30:28.083Z',
      progressReport: 31,
      status: 'Passed',
      questionStats: {
        total: 30,
        correct: 24,
        incorrect: 5,
        blank: 1,
      }
    },
  ]

  startExam(){
    this.router.navigate(['official-exam/start']);
  }
}
