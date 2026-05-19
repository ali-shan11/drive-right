import { Component } from '@angular/core';
import { Rules } from './rules/rules';
import { Faqs } from './faqs/faqs';
import { FrscAssessment } from "./frsc-assessment/frsc-assessment";

@Component({
  selector: 'app-start-exam',
  imports: [FrscAssessment , Rules, Faqs,],
  templateUrl: './start-exam.html',
  styleUrl: './start-exam.scss',
})
export class StartExam {
  public showAssessment = true;
  public showRules = false;
  public showFaqs = false;
}
