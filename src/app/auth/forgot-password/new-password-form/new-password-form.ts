import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-password-form',
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './new-password-form.html',
  styleUrl: './new-password-form.scss',
})
export class NewPasswordForm {
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  private fb = inject(FormBuilder);

  protected showPassword = signal(false);
  protected showConfirmPassword = signal(false);

  protected form = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
  });

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
