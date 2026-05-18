import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from './login-form/login-form';
import { FaceVerification } from "../face-verification/face-verification";
import { VerifyFace } from '../face-verification/verify-face/verify-face';
import { VerifySuccessful } from '../face-verification/verify-successful/verify-successful';
type Step =
  | 'login'
  | 'face-verification'
  | 'face-scan'
  | 'scan-success'

@Component({
  selector: 'app-login',
  imports: [NgOptimizedImage, LoginForm, FaceVerification , VerifyFace , VerifySuccessful],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private router = inject(Router);
  currentStep : Step = 'login';

  goTo(step: Step): void {
    this.currentStep = step;
  }

  signIn(): void {
    this.router.navigate(['/dashboard']);
  }
}
