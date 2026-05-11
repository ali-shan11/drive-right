import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ForgotPasswordForm } from './forgot-password-form/forgot-password-form';
import { ConfirmOtp } from "./confirm-otp/confirm-otp";
import { NewPasswordForm } from "./new-password-form/new-password-form";
import { PasswordUpdated } from "./password-updated/password-updated";
type Step = 'forgot-password-form' | 'confirm-otp' | 'set-new-passwrod' | 'new-password-success';

@Component({
  selector: 'app-forgot-password',
  imports: [NgOptimizedImage, ForgotPasswordForm, ConfirmOtp, NewPasswordForm, PasswordUpdated],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  currentStep: Step = 'forgot-password-form';

  goTo(step: Step): void {
    this.currentStep = step;
  }
}
