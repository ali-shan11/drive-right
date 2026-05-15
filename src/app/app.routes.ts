import { Routes } from '@angular/router';
import { AppLayout } from './app-layout/app-layout';
import { Dashboard } from './dashboard/dashboard';
import { DrivingAid } from './dashboard/driving-aid/driving-aid';
import { AidList } from './dashboard/aid-list/aid-list';
import { Courses } from './courses/courses';
import { CourseDetail } from './courses/course-detail/course-detail';
import { MockTest } from './mock-test/mock-test';
import { StartMockAssessment } from './mock-test/start-mock-assessment/start-mock-assessment';
import { OfficialExam } from './official-exam/official-exam';
import { PaymentDialog } from './shared/components/payment-dialog/payment-dialog';
import { RecentAttempts } from './official-exam/recent-attempts/recent-attempts';
import { AttemptDetail } from './official-exam/recent-attempts/attempt-detail/attempt-detail';
import { StartExam } from './official-exam/start-exam/start-exam';
import { ChapterDetails } from './courses/chapter-details/chapter-details';
import { SimulationStarted } from './courses/chapter-details/simulation-started/simulation-started';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-up',
    pathMatch: 'full',
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./auth/sign-up/sign-up').then((m) => m.SignUp),
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./auth/login/login').then((m) => m.Login),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./auth/forgot-password/forgot-password').then((m) => m.ForgotPassword),
  },

  {
    path: '',
    component: AppLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'driving-aids', component: DrivingAid },
      { path: 'aid-list', component: AidList },
      { path: 'courses', component: Courses },
      { path: 'course-detail', component: CourseDetail },
      { path: 'chapter-detail', component: ChapterDetails },
      { path: 'simulation-started', component: SimulationStarted },
      { path: 'payment', component: PaymentDialog },
      { path: 'mock-test', component: MockTest },
      { path: 'official-exam', component: OfficialExam },
      { path: 'official-exam/recent-attempts', component: RecentAttempts },
      { path: 'official-exam/recent-attempts/:id', component: AttemptDetail },
    ],
  },
  { path: 'start-assessment', component: StartMockAssessment },
  { path: 'start-exam', component: StartExam },
];
