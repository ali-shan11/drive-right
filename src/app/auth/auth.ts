import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivateEmailBody, LoginBody, RegisterBody, ResetPasswordBody, SendEmailActivationLinkBody } from '../shared/models/auth';
import { CreateKycBody } from '../shared/models/kyc';
import { ApiResponse } from '../interfaces/api';
import { AuthResult, RegisterResult, ResetPasswordResult } from '../interfaces/auth';
import { KycResult } from '../interfaces/kyc';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);
  private baseUrl = environment.apiBaseUrl;

  login(body: LoginBody) {
    return this.http.post<ApiResponse<AuthResult>>(`${this.baseUrl}/api/TokenAuth/Authenticate`, body);
  }

  register(body: RegisterBody) {
    return this.http.post<ApiResponse<RegisterResult>>(`${this.baseUrl}/api/services/app/Account/Register`, body);
  }

  sendEmailActivationLink(body: SendEmailActivationLinkBody) {
    return this.http.post<ApiResponse<null>>(`${this.baseUrl}/api/services/app/Account/SendEmailActivationLink`, body);
  }

  activateEmail(body: ActivateEmailBody) {
    return this.http.post<ApiResponse<null>>(`${this.baseUrl}/api/services/app/Account/ActivateEmail`, body);
  }

  createKyc(body: CreateKycBody) {
    return this.http.post<ApiResponse<KycResult>>(`${this.baseUrl}/api/services/app/UserProfile/Create`, body);
  }

  sendPasswordResetCode(body: { email: string }) {
    return this.http.post<ApiResponse<null>>(`${this.baseUrl}/api/services/app/Account/SendPasswordResetCode`, body);
  }

  resetPassword(body: ResetPasswordBody) {
    return this.http.post<ApiResponse<ResetPasswordResult>>(`${this.baseUrl}/api/services/app/Account/ResetPassword`, body);
  }
}
