import { Injectable } from '@angular/core';
import { Actions, createEffect,ofType } from '@ngrx/effects';
import { ActionCreator } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { map, switchMap } from 'rxjs';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { CustomerActions} from '../actions/customer.actions'

@Injectable()
export class CustomerEffects {
  constructor(private actions$: Actions, private customerService :CustomerService) {}

     getCustomers$ = createEffect((): any=>{
       return this.actions$.pipe(
            ofType(CustomerActions.loadCustomers),
            switchMap(() => this.customerService.getAllCustomers()),
            map((customers: Customer[]) => CustomerActions.loadCustomerSuccess({customerList:customers}))
        )
        });

     // getCustomerById$ = createEffect((): any=>{
     //      return this.actions$.pipe(
     //           ofType(CustomerActions.loadCustomerByID),
     //           switchMap((id:number) => this.customerService.getCustomerById(id)),
     //           map((customer: Customer) => CustomerActions.loadCustomerByIDSuccess({customer:customer}))
     //       )
     //       });
      
     addCustomer$ = createEffect((): any=>{
               return this.actions$.pipe(
                    ofType(CustomerActions.addCustomer),
                    switchMap(({customer}) => this.customerService.addCustomer(customer)),
                    map((customer: Customer) => CustomerActions.addCustomerSuccess({customer:customer}))
                )
                });
     updateCustomer$ = createEffect((): any=>{
                    return this.actions$.pipe(
                         ofType(CustomerActions.updateCustomer),
                         switchMap(({customer}) => this.customerService.updateCustomer(customer)),
                         map((customer: Customer) => CustomerActions.updateCustomerSuccess({customer:customer}))
                     )
                     });
     deleteCustomer$ = createEffect((): any=>{
                         return this.actions$.pipe(
                              ofType(CustomerActions.deleteCustomer),
                              switchMap(({id}) => this.customerService.DeleteCustomer(id)),
                              map((customer: Customer) => CustomerActions.deleteCustomerSuccess({customer:customer}))
                          )
                          });
}



