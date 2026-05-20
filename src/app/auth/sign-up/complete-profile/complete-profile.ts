import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, output, signal, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../auth';
import { AppSwal as Swal } from '../../../shared/utils/swal';

@Component({
  selector: 'app-complete-profile',
  imports: [ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './complete-profile.html',
  styleUrl: './complete-profile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompleteProfile {
  next = output<void>();
  back = output<void>();

  private auth = inject(Auth);
  private fb = inject(FormBuilder);

  protected loading = signal(false);

  readonly avatarInput = viewChild.required<ElementRef<HTMLInputElement>>('avatarInput');
  protected previewUrl = signal<string | null>(null);

  protected form = this.fb.nonNullable.group({
    fullName:        ['', Validators.required],
    gender:          ['', Validators.required],
    dob:             ['', Validators.required],
    stateOfOrigin:   ['', Validators.required],
    nationality:     ['', Validators.required],
    maritalStatus:   ['', Validators.required],
    email:           ['', [Validators.required, Validators.email]],
    phone:           ['', Validators.required],
    address:         ['', Validators.required],
    nationalIdCard:  this.fb.control<File | null>(null, Validators.required),
    utilityBill:     this.fb.control<File | null>(null),
    kinFullName:     ['', Validators.required],
    kinRelationship: ['', Validators.required],
    kinPhone:        ['', Validators.required],
    kinAddress:      ['', Validators.required],
  });

  protected get nationalIdFileName(): string {
    return (this.form.get('nationalIdCard')?.value as File)?.name ?? '';
  }

  protected get utilityBillFileName(): string {
    return (this.form.get('utilityBill')?.value as File)?.name ?? '';
  }

  protected triggerInput(): void {
    this.avatarInput().nativeElement.click();
  }

  protected onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => this.previewUrl.set(reader.result as string);
    reader.readAsDataURL(file);
  }

  protected onDocumentChange(event: Event, field: 'nationalIdCard' | 'utilityBill'): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.form.get(field)?.setValue(file);
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { fullName, gender, dob, stateOfOrigin, address } = this.form.getRawValue();

    this.loading.set(true);
    this.auth.createKyc({
      fullName,
      gender,
      dateOfBirth: new Date(dob).toISOString(),
      stateOfOrigin,
      residentialAddress: address,
      profilePhotoUrl: 'https://test.com',
      nin: 'https://test.com',
    }).subscribe({
      next: () => {
        this.loading.set(false);
        Swal.fire({
          icon: 'success',
          title: 'KYC Profile Created',
          text: 'Your profile has been submitted successfully.',
          timer: 1500,
          showConfirmButton: false,
        }).then(() => this.next.emit());
      },
      error: (err) => {
        this.loading.set(false);
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: err?.error?.error?.message ?? 'Failed to create KYC profile. Please try again.',
        });
      },
    });
  }
}
