import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-password-updated',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './password-updated.html',
  styleUrl: './password-updated.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordUpdated {}
