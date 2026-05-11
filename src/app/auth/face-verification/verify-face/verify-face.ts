import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';

@Component({
  selector: 'app-verify-face',
  imports: [NgOptimizedImage , RoundProgressComponent],
  templateUrl: './verify-face.html',
  styleUrl: './verify-face.scss',
})
export class VerifyFace {
  @Output() next = new EventEmitter<void>();
  current = signal(20);
  max = signal(100);
}
