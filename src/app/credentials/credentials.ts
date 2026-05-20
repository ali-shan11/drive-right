import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Passkeys } from './passkeys/passkeys';

@Component({
  selector: 'app-credentials',
  imports: [NgStyle , Passkeys],
  templateUrl: './credentials.html',
  styleUrl: './credentials.scss',
})
export class Credentials {
activeTab = 'passkey';

  tabs = [
    {
      id: 'passkey',
      label: 'Passkey',
      imageUrl : 'images/icons/passkey-icon.svg'
    },
    {
      id: 'badges',
      label: 'Badges',
      imageUrl : 'images/icons/badge-icon.svg'
    },
    {
      id: 'certificate',
      label: 'Certificate',
      imageUrl : 'images/icons/certificate-icon.svg'
    },
     {
      id: 'license',
      label: 'License',
      imageUrl : 'images/icons/license-icon.svg'
    },
  ];

  setActive(id: string) {
    this.activeTab = id;
  }

}
