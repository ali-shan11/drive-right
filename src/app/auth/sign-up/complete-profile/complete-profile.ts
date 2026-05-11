import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-complete-profile',
  imports: [ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './complete-profile.html',
  styleUrl: './complete-profile.scss',
})
export class CompleteProfile {
  
  //  Step navigation 
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  //  Avatar upload 
  @ViewChild('avatarInput') avatarInput!: ElementRef<HTMLInputElement>;
  previewUrl: string | null = null;

  triggerInput(): void {
    this.avatarInput.nativeElement.click();
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }


  //  File name getters 
  get nationalIdFileName(): string {
    return (this.form.get('nationalIdCard')?.value as File)?.name ?? '';
  }

  get utilityBillFileName(): string {
    return (this.form.get('utilityBill')?.value as File)?.name ?? '';
  }

  //  Form 
  private fb = inject(FormBuilder);

  protected form = this.fb.group({
    // Personal Information
    fullName:        ['', Validators.required],
    gender:          ['', Validators.required],
    dob:             ['', Validators.required],
    stateOfOrigin:   ['', Validators.required],
    nationality:     ['', Validators.required],
    maritalStatus:   ['', Validators.required],

    // Contact Details
    email:           ['', [Validators.required, Validators.email]],
    phone:           ['', Validators.required],
    address:         ['', Validators.required],

    // Upload Documents
    nationalIdCard:  this.fb.control<File | null>(null, Validators.required),
    utilityBill:     this.fb.control<File | null>(null),

    // Next of Kin
    kinFullName:     ['', Validators.required],
    kinRelationship: ['', Validators.required],
    kinPhone:        ['', Validators.required],
    kinAddress:      ['', Validators.required],
  });

  // Document upload 
  onDocumentChange(event: Event, field: 'nationalIdCard' | 'utilityBill'): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.form.get(field)?.setValue(file);
  }

  protected onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.next.emit();
    }
  }
}
