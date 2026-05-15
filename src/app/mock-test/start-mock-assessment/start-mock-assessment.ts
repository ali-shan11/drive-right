import { Component } from '@angular/core';
import { Dialog } from "primeng/dialog";

@Component({
  selector: 'app-start-mock-assessment',
  imports: [Dialog],
  templateUrl: './start-mock-assessment.html',
  styleUrl: './start-mock-assessment.scss',
})
export class StartMockAssessment {
  public startAssessment = true;
}
