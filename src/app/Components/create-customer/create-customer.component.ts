import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { CustomerActions } from '../../store/actions/customer.actions';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.scss'
})
export class CreateCustomerComponent implements OnInit{
  addCustomerForm!: FormGroup;
  customer: Customer=new Customer();

  constructor( private formBuilder: FormBuilder,
    private customerService:CustomerService,private router: Router,
    private  store: Store,private actions$: Actions) {}

  ngOnInit(): void {
    this.addCustomerForm = this.formBuilder.group({      
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.email]     
    });
  }

  addCustomer()
  {
    var newCustomer = new Customer(this.addCustomerForm.value);   
    this.store.dispatch(CustomerActions.addCustomer({customer: newCustomer}));
    this.actions$.pipe(ofType(CustomerActions.addCustomerSuccess)).subscribe((data: any) => {
      alert("New Customer Created");
     this.router.navigate(['/view']);     
    })   
   
  }
}
