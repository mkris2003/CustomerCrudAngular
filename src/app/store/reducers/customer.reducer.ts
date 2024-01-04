import { createReducer, on, createFeatureSelector } from '@ngrx/store';
import { CustomerState } from '../initialState/customerState';
import { CustomerActions} from '../actions/customer.actions'

export const customerFeatureKey = 'customer';



export const initialCustomerState: CustomerState = {
  customerList:[],
  isLoading: false
};

export const customerReducer = createReducer(
  initialCustomerState,
  on(CustomerActions.loadCustomers, (state) => {
    return {
        ...state,
        isLoading: true
    };
}),
on(CustomerActions.loadCustomerSuccess, (state, { customerList }) => {
    return {
        ...state,
        isLoading: false,
        customerList:customerList
    };
}),

on(CustomerActions.addCustomer, (state) => {
  return {
      ...state,
      isLoading: false
  };
}),
on(CustomerActions.addCustomerSuccess, (state, { customer }) => {
 
  return {
      ...state,
      isLoading: false,
      customerList: [...state.customerList, customer],      
  };
}),

on(CustomerActions.updateCustomer, (state) => {
  return {
      ...state,
      isLoading: false,
  };
}),
on(CustomerActions.updateCustomerSuccess, (state, { customer }) => {
  return {
      ...state,
      customerList: state.customerList.map((b) => b.id === customer.id ? customer : b),
      isLoading: false,
  };
}),
on(CustomerActions.deleteCustomer, (state) => {
  return {
      ...state,
      isLoading: false,
  };
}),
on(CustomerActions.deleteCustomerSuccess, (state, { customer }) => {
  return {
      ...state,
      isLoading: false,
      customerList: state.customerList.filter((b) => b.id !== customer.id)
  };
})

);

export const selectCustomerState = createFeatureSelector<CustomerState>(customerFeatureKey);

