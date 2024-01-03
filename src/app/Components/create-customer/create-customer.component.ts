import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.scss'
})
export class CreateCustomerComponent implements OnInit{
  addCustomerForm!: FormGroup;
  customer: Customer=new Customer();

  constructor( private formBuilder: FormBuilder,
    private customerService:CustomerService,private router: Router) {}

  ngOnInit(): void {
    this.addCustomerForm = this.formBuilder.group({      
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.email],
     // id:[],
     // createAt:[],
     // lastUpdated:[]  
    });
  }

  addCustomer()
  {

    var newCustomer = new Customer(this.addCustomerForm.value);
    console.log(
      "New Customer " + JSON.stringify(newCustomer)
    );
    this.customerService.addCustomer(newCustomer).subscribe(data=>{
      console.log(
        "New Customer " + JSON.stringify(data)
      );
      alert("New Customer Created");
      this.router.navigate(['/view']);
    })
  }
}
