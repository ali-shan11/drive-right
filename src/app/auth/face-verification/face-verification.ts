import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-face-verification',
  imports: [NgOptimizedImage],
  templateUrl: './face-verification.html',
  styleUrl: './face-verification.scss',
})
export class FaceVerification {
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();
}
