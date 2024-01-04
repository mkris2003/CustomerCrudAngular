import { Actions, ofType } from '@ngrx/effects';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer';
import { select, Store } from '@ngrx/store';
import { CustomerActions } from '../../store/actions/customer.actions';
import { selectCustomerList } from '../../store/selects/CustomerSelect';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.scss'
})
export class ViewCustomerComponent implements OnInit {

  public customers: Customer[]=[];
  
  constructor( private router: Router,
    private  store: Store, private actions$: Actions) {  
   
      this.store.dispatch(CustomerActions.loadCustomers());
}  
  ngOnInit(): void {
   this.getallcustomers();
  }

  getallcustomers()
  {
      this.store.pipe(select(selectCustomerList)).subscribe(data=>
      {
        this.customers=data;
        // console.log(
        //   "Store Customer info" + JSON.stringify(data)
        // );
      });
    
  }
  updateCustomer(id:any)
  {
    this.router.navigate(['/update',id]);
  }

  deleteCustomer(id:any)
  {
    this.store.dispatch(CustomerActions.deleteCustomer({id:id}));
    this.actions$.pipe(ofType(CustomerActions.deleteCustomerSuccess)).subscribe((data: any) => {
      alert("Deleted customer info using id:"+id);
      
    })  
    
  }
}
