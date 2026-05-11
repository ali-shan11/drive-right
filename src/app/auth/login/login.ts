import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
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
  currentStep : Step = 'login';

  goTo(step: Step): void {
    this.currentStep = step;
  }
}
