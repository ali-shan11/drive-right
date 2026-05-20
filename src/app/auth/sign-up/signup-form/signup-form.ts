import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegisterBody } from '../../../shared/models/auth';
import { AppSwal as Swal } from '../../../shared/utils/swal';

@Component({
  selector: 'app-signup-form',
  imports: [ReactiveFormsModule, NgOptimizedImage, RouterLink],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupForm {
  next = output<RegisterBody>();

  private fb = inject(FormBuilder);

  protected showPassword = signal(false);
  protected showConfirmPassword = signal(false);

  protected form = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', Validators.required],
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  protected get emailValid(): boolean {
    const c = this.form.get('emailAddress');
    return !!(c?.valid && c.dirty);
  }

  protected get passwordsMismatch(): boolean {
    const pw = this.form.get('password');
    const cpw = this.form.get('confirmPassword');
    return !!(cpw?.dirty && pw?.value && cpw.value && pw.value !== cpw.value);
  }

  protected togglePassword(): void {
    this.showPassword.update((v) => !v);
  }

  protected toggleConfirmPassword(): void {
    this.showConfirmPassword.update((v) => !v);
  }

  protected onSubmit(): void {
    if (this.passwordsMismatch) {
      Swal.fire({ icon: 'error', title: 'Passwords Do Not Match', text: 'Please make sure both passwords are the same.' });
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      Swal.fire({ icon: 'warning', title: 'Missing Fields', text: 'Please fill in all required fields.' });
      return;
    }

    const { confirmPassword, ...rest } = this.form.getRawValue();
    this.next.emit({ ...rest, captchaResponse: 'true' });
  }
}
