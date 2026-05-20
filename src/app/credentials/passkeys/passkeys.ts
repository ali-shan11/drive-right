import { Component } from '@angular/core';

@Component({
  selector: 'app-passkeys',
  imports: [],
  templateUrl: './passkeys.html',
  styleUrl: './passkeys.scss',
})
export class Passkeys {
  passkeys = [
    {
      id: 1,
      status: 'active',
      secKey: 'TRL-8X4K-9M2P',
      issued: '24th May, 2026',
      expiry: '25th May, 2026',
    },
    {
      id: 2,
      status: 'active',
      secKey: 'TRL-8X4K-9M2P',
      issued: '24th May, 2026',
      expiry: '25th May, 2026',
    },
    {
      id: 3,
      status: 'active',
      secKey: 'TRL-8X4K-9M2P',
      issued: '24th May, 2026',
      expiry: '25th May, 2026',
    },
  ];
}
