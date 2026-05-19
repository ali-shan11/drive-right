import { Routes } from '@angular/router';
import { AppLayout } from './app-layout/app-layout';
import { Dashboard } from './dashboard/dashboard';
import { DrivingAid } from './dashboard/driving-aid/driving-aid';
import { AidList } from './dashboard/aid-list/aid-list';
import { Courses } from './courses/courses';
import { CourseDetail } from './courses/course-detail/course-detail';
import { MockTest } from './mock-test/mock-test';
import { OfficialExam } from './official-exam/official-exam';
import { PaymentDialog } from './shared/components/payment-dialog/payment-dialog';
import { RecentAttempts } from './official-exam/recent-attempts/recent-attempts';
import { AttemptDetail } from './official-exam/recent-attempts/attempt-detail/attempt-detail';
import { ChapterDetails } from './courses/chapter-details/chapter-details';
import { SimulationStarted } from './courses/chapter-details/simulation-started/simulation-started';
import { StartExam } from './start-exam/start-exam';
import { CourseCompleted } from './courses/chapter-details/course-completed/course-completed';
import { NotesDialog } from './courses/course-detail/notes-dialog/notes-dialog';
import { Exam } from './exam/exam';

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
      { path: 'dashboard/driving-aids', component: DrivingAid },
      { path: 'dashboard/aid-list', component: AidList },
      { path: 'courses', component: Courses },
      { path: 'courses/detail', component: CourseDetail },
      { path: 'courses/chapter-detail', component: ChapterDetails },
      { path: 'courses/simulation', component: SimulationStarted },
      { path: 'payment', component: PaymentDialog },
      { path: 'mock-test', component: MockTest },
      { path: 'official-exam', component: OfficialExam },
      { path: 'official-exam/recent-attempts', component: RecentAttempts },
      { path: 'official-exam/recent-attempts/:id', component: AttemptDetail },
      { path: 'chapter-details', component: ChapterDetails },
      { path: 'simulation-started', component: SimulationStarted },
      { path: 'course-completed', component: CourseCompleted },
      { path: 'notes', component: NotesDialog },
      { path: 'payment', component: PaymentDialog },
      { path: 'mock-test', component: MockTest },
      { path: 'official-exam', component: OfficialExam },
    ],
  },
  { path: 'official-exam/start', component: StartExam },
  { path: 'official-theory-exam', component: Exam },
];
