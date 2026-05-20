import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppSwal as Swal } from '../../../shared/utils/swal';

@Component({
  selector: 'app-forgot-password-form',
  imports: [ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './forgot-password-form.html',
  styleUrl: './forgot-password-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordForm {
  next = output<string>();
  back = output<void>();

  private fb = inject(FormBuilder);

  protected form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  protected get emailValid(): boolean {
    const c = this.form.get('email');
    return !!(c?.valid && c.dirty);
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      Swal.fire({ icon: 'warning', title: 'Missing Fields', text: 'Please enter a valid email address.' });
      return;
    }
    this.next.emit(this.form.getRawValue().email);
  }
}
