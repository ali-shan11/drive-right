import { Component } from '@angular/core';
import { Rules } from "./rules/rules";
import { Faqs } from './faqs/faqs';

@Component({
  selector: 'app-start-exam',
  imports: [Rules , Faqs],
  templateUrl: './start-exam.html',
  styleUrl: './start-exam.scss',
})
export class StartExam {
  public showRules = true;
  public showFaqs = true;
}
