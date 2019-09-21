import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { Credentials, User } from '@example-app/auth/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<any> {
    return this.http.post('/api/account/login',credentials);
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    // if (username !== 'test' && username !== 'ngrx') {
    //   return throwError('Invalid username or password');
    // }

    // return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}
