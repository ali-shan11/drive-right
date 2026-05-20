import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import { Otp } from '../../../shared/components/otp/otp';
import { Auth } from '../../auth';
import { AppSwal as Swal } from '../../../shared/utils/swal';

@Component({
  selector: 'app-verify-email',
  imports: [NgOptimizedImage, Otp],
  templateUrl: './verify-email.html',
  styleUrl: './verify-email.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyEmail {
  next = output<void>();
  back = output<void>();

  userId = input<number | null>(null);
  email = input('');

  private auth = inject(Auth);

  otp = signal('');
  error = signal(false);
  loading = signal(false);

  onOtpChange(value: string): void {
    this.otp.set(value);
    this.error.set(false);
  }

  onOtpComplete(value: string): void {
    const uid = this.userId();
    if (uid === null) {
      this.error.set(true);
      return;
    }

    this.loading.set(true);
    this.auth.activateEmail({ userId: uid, confirmationCode: value }).subscribe({
      next: () => {
        this.loading.set(false);
        Swal.fire({
          icon: 'success',
          title: 'Email Verified',
          text: 'Your email has been verified successfully.',
          timer: 1500,
          showConfirmButton: false,
        }).then(() => this.next.emit());
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(true);
        Swal.fire({
          icon: 'error',
          title: 'Verification Failed',
          text: err?.error?.error?.message ?? 'Invalid or expired verification code. Please try again.',
        });
      },
    });
  }
}
