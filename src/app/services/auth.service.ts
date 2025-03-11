import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  login(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/login`, data);
  }

  register(data: any): Observable<any> {
    // 🔹 ¡Este método es el que faltaba!
    return this.http.post(`${environment.apiUrl}/register`, data);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
