import { Injectable, signal } from '@angular/core';

export type Theme = 'red' | 'green' | 'yellow' | 'blue';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly activeTheme = signal<Theme>('yellow');

  setTheme(theme: Theme): void {
    this.activeTheme.set(theme);
    document.body.setAttribute('data-theme', theme);
  }
}
