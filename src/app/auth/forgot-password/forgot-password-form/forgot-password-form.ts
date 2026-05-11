import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-form',
  imports: [ReactiveFormsModule , NgOptimizedImage],
  templateUrl: './forgot-password-form.html',
  styleUrl: './forgot-password-form.scss',
})
export class ForgotPasswordForm {
  @Output() next = new EventEmitter;
  @Output() back = new EventEmitter;

  private fb = inject(FormBuilder);

  protected showPassword = signal(false);

  protected form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  protected get emailValid(): boolean {
    const c = this.form.get('email');
    return !!(c?.valid && c.dirty);
  }


  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('forgot password payload:', this.form.value);

    this.next.emit();
  }
}
