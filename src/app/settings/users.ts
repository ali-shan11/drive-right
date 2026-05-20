import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CreateOrUpdateUserBody, FindRolesBody, GetUsersBody } from '../shared/models/users';
import { FindRolesResult, GetUsersResult } from '../interfaces/users';
import { ApiResponse } from '../interfaces/api';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiBaseUrl;

  getUserList(body: GetUsersBody) {
    return this.http.post<GetUsersResult>(
      `${this.baseUrl}/api/services/app/User/GetUsers`,
      body
    );
  }

  getRolesList(body: FindRolesBody) {
    return this.http.post<ApiResponse<FindRolesResult>>(
      `${this.baseUrl}/api/services/app/OrganizationUnit/FindRoles`,
      body
    );
  }
  createOrUpdateUser(body: CreateOrUpdateUserBody){
    return this.http.post(this.baseUrl+'/api/services/app/User/CreateOrUpdateUser', body);
  }
}
