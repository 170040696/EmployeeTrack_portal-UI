
// authservice.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  Register( username: String, password: String): Observable<Object> { // to registed the user
    console.log("in register service");
    const user = { username, password };
    return this.http.post(`${this.baseUrl}/registration`, user);
    }

  login(username: String, password: String): Observable<any> {  
    return this.http.post(`${this.baseUrl}/login`, { username, password }) //  Sends login request to Spring Boot `/login` endpoint. Stores returned JWT token in `localStorage`.

      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token); //Store token.  "Look at the `token` key in the response object and store it." 
          //both sides must be the same key name which is 'token' **JWT is sent under the key `'token'`
        })
      );
  }


  getToken(): string | null { // Retrieve Token When Needed
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}


//  How it Works Now
// User logs in → server returns JWT.

// JWT is stored in localStorage.

// Every HTTP call includes the JWT in the Authorization header.

// Backend verifies the JWT before allowing access to endpoints like /api/employees.