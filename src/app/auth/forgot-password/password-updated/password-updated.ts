import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password-updated',
  imports: [NgOptimizedImage],
  templateUrl: './password-updated.html',
  styleUrl: './password-updated.scss',
})
export class PasswordUpdated {
  @Output() next = new EventEmitter;
}
