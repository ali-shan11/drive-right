import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService, Theme } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private themeService = inject(ThemeService);

  protected readonly title = signal('driveRight');
  protected readonly activeTheme = this.themeService.activeTheme;

  readonly themes: { name: Theme; color: string }[] = [
    { name: 'green', color: '#19c964' },
    { name: 'yellow', color: '#f0a500' },
    { name: 'blue', color: '#3b82f6' },
    { name: 'red', color: '#ef4444' },
  ];

  ngOnInit(): void {
    this.themeService.setTheme('yellow');
  }

  setTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
  }
}
