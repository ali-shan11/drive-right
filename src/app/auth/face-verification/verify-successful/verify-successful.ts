import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';

@Component({
  selector: 'app-verify-successful',
  imports: [NgOptimizedImage , RoundProgressComponent],
  templateUrl: './verify-successful.html',
  styleUrl: './verify-successful.scss',
})
export class VerifySuccessful {
  current = signal(100);
  max = signal(100);
}
