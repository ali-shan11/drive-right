import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../auth';
import { LoginBody } from '../../../shared/models/auth';

@Component({
  selector: 'app-login-form',
  imports: [NgOptimizedImage, ReactiveFormsModule, RouterLink],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginForm {
  private fb = inject(FormBuilder);
  private auth = inject(Auth);
  private router = inject(Router);

  protected showPassword = signal(false);
  public isLoading = signal(false);

  protected form = this.fb.group({
    userNameOrEmailAddress: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  protected get userNameValid(): boolean {
    const c = this.form.get('userNameOrEmailAddress');
    return !!(c?.valid && c.dirty);
  }

  protected togglePassword(): void {
    this.showPassword.update((v) => !v);
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    const body: LoginBody = {
      userNameOrEmailAddress: this.form.value.userNameOrEmailAddress!,
      password: this.form.value.password!,
      rememberClient: true,
    };

    this.auth.login(body).subscribe({
      next: (res) => {
        localStorage.setItem('accessToken', res.result.accessToken);
        localStorage.setItem('userId', String(res.result.userId));
        this.isLoading.set(false);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.isLoading.set(false);
        console.error('Login failed', err);
      },
    });
  }
}