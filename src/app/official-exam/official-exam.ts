import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { PaymentDialog } from "../shared/components/payment-dialog/payment-dialog";
import { ExamDateBookingDialog } from "./exam-date-booking-dialog/exam-date-booking-dialog";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-official-exam',
  imports: [NgTemplateOutlet, NgClass, PaymentDialog, ExamDateBookingDialog, RouterLink],
  templateUrl: './official-exam.html',
  styleUrl: './official-exam.scss',
})
export class OfficialExam {
  public showPaymentDialog = false;
  public showExamSchedulingDialog = false;
  public examStatus: 'booked' | 'no-booking' | 'passed' | 'failed' = 'booked';
  public bookingStatus: 'booked' | 'no-booking' | 'passed' = 'booked';

  bookExamClick(){
    this.showPaymentDialog = true;
  }

  onPaymentDialogClose(event: boolean){
    this.showPaymentDialog = false;
    if (event) {
      this.showExamSchedulingDialog = true;
    }
  }

  onDateBookingClose(event: boolean){
    this.showExamSchedulingDialog = false;
  }
}
