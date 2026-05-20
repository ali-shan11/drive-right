import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ForgotPasswordForm } from './forgot-password-form/forgot-password-form';
import { ConfirmOtp } from './confirm-otp/confirm-otp';
import { NewPasswordForm } from './new-password-form/new-password-form';
import { PasswordUpdated } from './password-updated/password-updated';
import { Auth } from '../auth';
import { AppSwal as Swal } from '../../shared/utils/swal';

type Step = 'forgot-password-form' | 'confirm-otp' | 'set-new-password' | 'new-password-success';

@Component({
  selector: 'app-forgot-password',
  imports: [NgOptimizedImage, ForgotPasswordForm, ConfirmOtp, NewPasswordForm, PasswordUpdated],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPassword {
  private auth = inject(Auth);

  currentStep: Step = 'forgot-password-form';
  resetCode = signal('');

  goTo(step: Step): void {
    this.currentStep = step;
  }

  onEmailSubmit(email: string): void {
    this.auth.sendPasswordResetCode({ email }).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Code Sent',
          text: `A password reset code has been sent to ${email}`,
          timer: 2000,
          showConfirmButton: false,
        }).then(() => this.goTo('confirm-otp'));
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err?.error?.error?.message ?? 'Failed to send reset code. Please try again.',
        });
      },
    });
  }

  onCodeSubmit(code: string): void {
    this.resetCode.set(code);
    this.goTo('set-new-password');
  }
}
