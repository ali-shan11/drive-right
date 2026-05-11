import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { NgOtpInputModule } from 'ng-otp-input';

@Component({
  selector: 'app-otp',
  imports: [NgOtpInputModule],
  templateUrl: './otp.html',
  styleUrl: './otp.scss',
  encapsulation: ViewEncapsulation.None, 
})
export class Otp {
  //  @Inputs 
  @Input() length   = 6;
  @Input() hasError = false;
  @Input() disabled = false;

  // @Outputs 
  @Output() otpChange   = new EventEmitter<string>();
  @Output() otpComplete = new EventEmitter<string>();

  //  local interface — replaces the missing Config type 
  config: {
    length:           number;
    allowNumbersOnly: boolean;
    disableAutoFocus: boolean;
    isPasswordInput:  boolean;
    placeholder:      string;
    containerClass:   string;
    inputClass:       string;
  } | null = null; // null until ngOnChanges populates it

  
  ngOnChanges(): void {
    this.config = {
      length:           this.length,
      allowNumbersOnly: true,
      disableAutoFocus: false,
      isPasswordInput:  false,
      placeholder:      '·',
      containerClass:   'otp-container',
      inputClass:       'otp-box',
    };
  }

  //  handleChange 
  handleChange(value: string): void {
    this.otpChange.emit(value);

    if (value.length === this.length) {
      this.otpComplete.emit(value);
    }
  }
}
