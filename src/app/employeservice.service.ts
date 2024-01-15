import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from './employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeserviceService {
 
  private baseUrl= "http://localhost:8080/api/";
  
  constructor(private httpclient : HttpClient) { }

  GetEmployeesList(): Observable<Employe[]>{
    
    return this.httpclient.get<Employe[]>(`${this.baseUrl+ 'employees'}`);
   
  }
  createEmployee(employe:Employe): Observable<Object>{
  return this.httpclient.post(`${this.baseUrl}`,employe);}

  GetEmployeebyId(employeeid: number): Observable<Employe>{
    console.log("in get employeebyId service method :"+ employeeid)
    return this.httpclient.get<Employe>(`${this.baseUrl+'employees'}/${employeeid}`);
  }

  updateEmployee(employe:Employe, id:number): Observable<Object>{
    return this.httpclient.put(`${this.baseUrl}${id}`,employe);}

  Deleteemployee( id:number):Observable<Object>{
    return this,this.httpclient.delete(`${this.baseUrl}${id}`)
  }  
}
