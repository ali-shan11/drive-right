import { Component } from '@angular/core';
import { Rules } from "./rules/rules";

@Component({
  selector: 'app-start-exam',
  imports: [Rules],
  templateUrl: './start-exam.html',
  styleUrl: './start-exam.scss',
})
export class StartExam {
  public showRules = true;
}
