import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:5001/atom-task-app/us-central1/api/users';

  constructor(private http: HttpClient) {}

  login(email: string): Observable<string> {
    return this.http.get<{ id: string }>(`${this.apiUrl}/${email}`).pipe(
      map((user) => {
        localStorage.setItem('userId', user.id);
        return user.id;
      }),
      catchError(() => {
        const confirmCreate = confirm('Usuario no encontrado. ¿Desea crearlo?');
        if (!confirmCreate) return throwError(() => new Error('Usuario cancelado'));

        return this.http.post<{ id: string }>(this.apiUrl, { email }).pipe(
          map((user) => {
            localStorage.setItem('userId', user.id);
            return user.id;
          })
        );
      })
    );
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  logout(): void {
    localStorage.removeItem('userId');
  }
}
