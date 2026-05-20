import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../auth';
import { AppSwal as Swal } from '../../../shared/utils/swal';

@Component({
  selector: 'app-new-password-form',
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './new-password-form.html',
  styleUrl: './new-password-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPasswordForm {
  next = output<void>();
  back = output<void>();

  resetCode = input('');

  private fb = inject(FormBuilder);
  private auth = inject(Auth);

  protected loading = signal(false);
  protected showPassword = signal(false);
  protected showConfirmPassword = signal(false);

  protected form = this.fb.nonNullable.group({
    password: ['', Validators.required],
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
    if (this.passwordsMismatch) {
      Swal.fire({ icon: 'error', title: 'Passwords Do Not Match', text: 'Please make sure both passwords are the same.' });
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      Swal.fire({ icon: 'warning', title: 'Missing Fields', text: 'Please fill in all required fields.' });
      return;
    }

    const { password } = this.form.getRawValue();
    this.loading.set(true);

    this.auth.resetPassword({ resetCode: this.resetCode(), password, returnUrl: '' }).subscribe({
      next: () => {
        this.loading.set(false);
        Swal.fire({
          icon: 'success',
          title: 'Password Updated',
          text: 'Your password has been reset successfully.',
          timer: 1500,
          showConfirmButton: false,
        }).then(() => this.next.emit());
      },
      error: (err) => {
        this.loading.set(false);
        Swal.fire({
          icon: 'error',
          title: 'Reset Failed',
          text: err?.error?.error?.message ?? 'Failed to reset password. Please try again.',
        });
      },
    });
  }
}
