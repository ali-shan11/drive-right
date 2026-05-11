import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { NgOtpInputComponent } from 'ng-otp-input';
import { Otp } from '../../../shared/components/otp/otp';

@Component({
  selector: 'app-verify-email',
  imports: [NgOptimizedImage , Otp],
  templateUrl: './verify-email.html',
  styleUrl: './verify-email.scss',
})
export class VerifyEmail {
  // verify-email.ts
@Output() next = new EventEmitter<void>();
@Output() back = new EventEmitter<void>();

  otp = signal('');
  error = signal(false);
  loading = signal(false);
  success = signal(false);

  // called on every keystroke
  onOtpChange(value: string): void {
    this.otp.set(value);
    this.error.set(false); // clear error as user retypes
  }

  // called automatically when all boxes are filled
  onOtpComplete(value: string): void {
    this.loading.set(true);

    // replace with your real API call
    setTimeout(() => {
      this.loading.set(false);
      if (value === '123456') {
        this.success.set(true);
      } else {
        this.error.set(true); // turns boxes red
      }
    }, 1500);
  }
}
