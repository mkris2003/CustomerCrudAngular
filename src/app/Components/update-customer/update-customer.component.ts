import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.scss'
})
export class UpdateCustomerComponent implements OnInit, OnDestroy {

  id: number=0;
  private sub: any;

  updateCustomerForm!: FormGroup;
  customer: Customer=new Customer();
  
  constructor(private route: ActivatedRoute,  private formBuilder: FormBuilder,
    private customerService:CustomerService,private router: Router) {}
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
  this.customerService.getCustomerById(this.id).subscribe(data=>{
    this.updateCustomerForm.controls["id"].setValue(data.id);
    this.updateCustomerForm.controls["firstname"].setValue(data.firstName);
    this.updateCustomerForm.controls["lastname"].setValue(data.lastName);
    this.updateCustomerForm.controls["email"].setValue(data.email);   
  })
    });

    this.updateCustomerForm = this.formBuilder.group({      
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.email],
      id:[]  
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  updateCustomer() {

    var updatecustomer = new Customer(this.updateCustomerForm.value);
    this.customerService.updateCustomer(updatecustomer).subscribe(data=>{
      console.log(
        "update Customer " + JSON.stringify(data)
      );
      alert("Customer data updated");
      this.router.navigate(['/view']);
    })
   
  }
}
