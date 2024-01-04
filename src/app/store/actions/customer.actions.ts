import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Customer } from '../../models/customer';

export const CustomerActions = createActionGroup({
  source: 'CustomerActions',
  events: {
    LoadCustomers: emptyProps(),
    LoadCustomerSuccess: props<{ customerList: Customer[] }>(),
    // LoadCustomerByID:props<{ id: number }>(),
    // LoadCustomerByIDSuccess:props<{ customer: Customer }>(),
    UpdateCustomer:props<{ customer: Customer }>(),
    UpdateCustomerSuccess:props<{ customer: Customer }>(),
    AddCustomer:props<{ customer: Customer }>(),
    AddCustomerSuccess:props<{ customer: Customer }>(),
    DeleteCustomer:props<{ id: number }>(),
    DeleteCustomerSuccess:props<{ customer: Customer }>()

  }
});
