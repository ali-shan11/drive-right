import { Component } from '@angular/core';
import { Header } from "../shared/components/header/header";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-app-layout',
  imports: [Header , RouterOutlet],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss',
})
export class AppLayout {

}
