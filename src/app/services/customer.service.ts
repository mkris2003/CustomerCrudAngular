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

  getCustomerById(id:number): Observable<Customer> {
    return this.http.get<Customer>(`${baseUrl}/${id}`);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${baseUrl}`, customer);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${baseUrl}`, customer);
  }

  DeleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${baseUrl}/${id}`);
  }
}
