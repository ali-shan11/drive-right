import { Routes } from '@angular/router';
import { AppLayout } from './app-layout/app-layout';
import { Dashboard } from './dashboard/dashboard';
import { DrivingAid } from './dashboard/driving-aid/driving-aid';
import { AidList } from './dashboard/aid-list/aid-list';
import { Courses } from './courses/courses';
import { CourseDetail } from './courses/course-detail/course-detail';

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
    ],
  },
];
