import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.scss'
})
export class ViewCustomerComponent implements OnInit {

  public customers: Customer[]=[];
  
  constructor( private customerService:CustomerService,private router: Router) {  
   
}  
  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(data=>
      {
        this.customers=data;
      })
  }

  updateCustomer(id:number)
  {
    this.router.navigate(["/update"]);
  }

  deleteCustomer(id:number)
  {
    
  }
}
