import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Otp } from '../../../shared/components/otp/otp';

@Component({
  selector: 'app-confirm-otp',
  imports: [NgOptimizedImage, Otp],
  templateUrl: './confirm-otp.html',
  styleUrl: './confirm-otp.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmOtp {
  next = output<string>();
  back = output<void>();

  otp = signal('');
  error = signal(false);

  onOtpChange(value: string): void {
    this.otp.set(value);
    this.error.set(false);
  }

  onOtpComplete(value: string): void {
    this.otp.set(value);
  }

  onVerify(): void {
    if (this.otp().length < 6) {
      this.error.set(true);
      return;
    }
    this.next.emit(this.otp());
  }
}
