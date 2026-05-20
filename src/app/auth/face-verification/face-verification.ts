import { NgOptimizedImage } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-verification',
  imports: [NgOptimizedImage],
  templateUrl: './face-verification.html',
  styleUrl: './face-verification.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaceVerification {
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const timer = setTimeout(() => this.router.navigate(['/dashboard']), 3000);
      this.destroyRef.onDestroy(() => clearTimeout(timer));
    });
  }
}
