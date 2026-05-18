import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);
  private baseUrl = environment.apiBaseUrl;
  
  login(body: any) {
    return this.http.post(`${this.baseUrl}/api/TokenAuth/Authenticate`, body);
  }
}
