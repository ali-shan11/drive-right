import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SignupForm } from './signup-form/signup-form';
import { VerifyEmail } from './verify-email/verify-email';
import { CompleteProfile } from './complete-profile/complete-profile';
import { FaceVerification } from '../face-verification/face-verification';
import { VerifyFace } from '../face-verification/verify-face/verify-face';
import { VerifySuccessful } from '../face-verification/verify-successful/verify-successful';
import { Auth } from '../auth';
import { RegisterBody } from '../../shared/models/auth';
import { AppSwal as Swal } from '../../shared/utils/swal';

type Step = 'create-account' | 'verify-email' | 'complete-profile' | 'face-verification' | 'face-scan' | 'scan-success';

@Component({
  selector: 'app-sign-up',
  imports: [NgOptimizedImage, SignupForm, VerifyEmail, CompleteProfile, FaceVerification, VerifyFace, VerifySuccessful],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUp {
  private auth = inject(Auth);

  currentStep: Step = 'create-account';
  registeredEmail = signal('');
  registeredUserId = signal<number | null>(null);

  goTo(step: Step): void {
    this.currentStep = step;
  }

  onRegister(body: RegisterBody): void {
    this.auth.register(body).subscribe({
      next: (res) => {
        this.registeredEmail.set(body.emailAddress);
        if (res.result?.userId) {
          this.registeredUserId.set(res.result.userId);
        }
        this.auth.sendEmailActivationLink({ email: body.emailAddress }).subscribe({
          next: () => {
            Swal.fire({
              icon: 'success',
              title: 'Registration Successful',
              text: `We've sent a verification code to ${body.emailAddress}`,
              timer: 2000,
              showConfirmButton: false,
            }).then(() => this.goTo('verify-email'));
          },
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: err?.error?.error?.message ?? 'Failed to send verification email. Please try again.',
            });
          },
        });
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: err?.error?.error?.message ?? 'Something went wrong. Please try again.',
        });
      },
    });
  }
}
