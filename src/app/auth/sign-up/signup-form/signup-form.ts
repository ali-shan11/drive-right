import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  imports: [ReactiveFormsModule , NgOptimizedImage , RouterLink],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.scss',
})
export class SignupForm {
  @Output() next = new EventEmitter<void>();

  private fb = inject(FormBuilder);

  protected showPassword = signal(false);
  protected showConfirmPassword = signal(false);

  protected form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
  });

  protected get emailValid(): boolean {
    const c = this.form.get('email');
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
    if (this.form.valid) {
      console.log(this.form.value);
    }
    this.next.emit();
  }
}
