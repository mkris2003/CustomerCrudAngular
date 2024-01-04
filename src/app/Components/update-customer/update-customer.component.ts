import { selectCustomerList } from './../../store/selects/CustomerSelect';
import { select, Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../models/customer';
import { CustomerActions } from '../../store/actions/customer.actions';
import { ofType, Actions } from '@ngrx/effects';

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
    private router: Router,
    private  store: Store,private actions$: Actions) {}
  ngOnInit() {
    this.updateCustomerForm = this.formBuilder.group({      
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.email],
      id:[]  
    });

    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       this.store.pipe(select(selectCustomerList)).subscribe( data=> 
        {
          var result= data.filter(a=>a.id===this.id);
          var updateCustomer= new Customer(result[0]);
          this.updateCustomerForm.controls["id"].setValue(updateCustomer.id);
          this.updateCustomerForm.controls["firstname"].setValue(updateCustomer.firstName);
          this.updateCustomerForm.controls["lastname"].setValue(updateCustomer.lastName);
          this.updateCustomerForm.controls["email"].setValue(updateCustomer.email);  
        });      
    });    
  }

   
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  
  updateCustomer() {

    var updatecustomer = new Customer(this.updateCustomerForm.value);
    this.store.dispatch(CustomerActions.updateCustomer({customer: updatecustomer}));
    this.actions$.pipe(ofType(CustomerActions.updateCustomerSuccess)).subscribe((data: any) => {
      alert("Customer data updated");
     this.router.navigate(['/view']);     
    })
   
  }
}
