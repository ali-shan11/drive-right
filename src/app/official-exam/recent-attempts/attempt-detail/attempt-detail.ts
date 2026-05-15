import { Component } from '@angular/core';
import { ProgressBar } from "primeng/progressbar";

@Component({
  selector: 'app-attempt-detail',
  imports: [ProgressBar],
  templateUrl: './attempt-detail.html',
  styleUrl: './attempt-detail.scss',
})
export class AttemptDetail {
  public isPassed: boolean = true;
}
