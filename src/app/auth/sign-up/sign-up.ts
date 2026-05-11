import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignupForm } from './signup-form/signup-form';
import { VerifyEmail } from './verify-email/verify-email';
import { CompleteProfile } from "./complete-profile/complete-profile";
import { NgOptimizedImage } from '@angular/common';
import { FaceVerification } from '../face-verification/face-verification';
import { VerifyFace } from '../face-verification/verify-face/verify-face';
import { VerifySuccessful } from '../face-verification/verify-successful/verify-successful';

type Step = 'create-account' | 'verify-email' | 'complete-profile' | 'face-verification' | 'face-scan' | 'scan-success';

@Component({
  selector: 'app-sign-up',
  imports: [NgOptimizedImage, SignupForm, VerifyEmail, CompleteProfile , FaceVerification, VerifyFace , VerifySuccessful],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUp {
  currentStep: Step = 'create-account';

  goTo(step: Step): void {
    this.currentStep = step;
  }
}
