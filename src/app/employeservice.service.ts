// employeservice.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from './employe';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeserviceService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient, private authService: AuthserviceService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

//Every request to a protected endpoint includes the token.Backend will read and validate this token using `JwtFilter`

  GetEmployeesList(): Observable<Employe[]> {
    return this.http.get<Employe[]>(`${this.baseUrl}employees`, { headers: this.getAuthHeaders() });
  }

  GetEmployeebyId(id: number): Observable<Employe> {
    return this.http.get<Employe>(`${this.baseUrl}employees/${id}`, { headers: this.getAuthHeaders() });
  }

  createEmployee(employe: Employe): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employe, { headers: this.getAuthHeaders() });
  }

  updateEmployee(employe: Employe, id: number): Observable<Object> {
    return this.http.put(`${this.baseUrl}${id}`, employe, { headers: this.getAuthHeaders() });
  }

  Deleteemployee(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}${id}`, { headers: this.getAuthHeaders() });
  }
}

//1. Login sends credentials, stores returned token
//2. Token is fetched from localStorage via helper method 
//3.HTTP headers are constructed with `Authorization: Bearer <token>
//4.  Requests to backend include this header for authentication 
//5. This approach ensures stateless, secure communication between Angular and Spring Boot.

//6. One login → One token → Reused across all requests until logout or expiry. a new JWT token is not generated for each request.
//  What Actually Happens:
// At Login:
// The backend creates a single JWT token (e.g., valid for 10 hours).
// It sends that token back to the frontend.
// The frontend stores it (e.g., in localStorage).

// For Every Subsequent Request:
// The frontend sends the same token in the Authorization: Bearer <token> header.
// The backend verifies it, but does not create a new one.

// Until:
// The token expires, or
// The user logs out (and you remove the token manually).
//If the token expires, you’ll get a 401 Unauthorized response from the backend.
//if we want we can implement automatic token refresh with a short-lived access token and a long-lived refresh token

//Angular handles storing and passing the token.
//Spring Boot checks every incoming request via the JwtFilter.
//If the token is valid and not expired, access is granted.