import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  selectedMainMenu: string = 'user';

  subMenus: any = {
    user: [
      { label: 'Users', link: 'users' },
    ]
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
      const currentUrl = this.router.url.replace('/', '');
      for (const [mainKey, items] of Object.entries(this.subMenus)) {
        const menuItems = items as { label: string; link: string }[];
        if (menuItems.some(item => currentUrl.includes(item.link))) {
          this.selectedMainMenu = mainKey;
          break;
        }
      }
    }
  
  selectMainMenu(menu: string) {
    this.selectedMainMenu = menu;
  }
}
