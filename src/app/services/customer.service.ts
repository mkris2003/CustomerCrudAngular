import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

const  baseUrl  ='https://localhost:7150/api/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
   

constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${baseUrl}/GetAllCustomers`);
  }
}
