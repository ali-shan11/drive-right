import { Component } from '@angular/core';
import { ProgressBar } from "primeng/progressbar";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-attempt-detail',
  imports: [ProgressBar, RouterLink],
  templateUrl: './attempt-detail.html',
  styleUrl: './attempt-detail.scss',
})
export class AttemptDetail {
  public isPassed: boolean = true;
}
