import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Adjust the import path if your environment file is located elsewhere, for example:
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  signIn(credentials: { email: string; password: string }) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/signin`, credentials);
  }
}