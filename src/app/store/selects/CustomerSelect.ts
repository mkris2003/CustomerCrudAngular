
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerState } from '../initialState/customerState';

import { customerFeatureKey, selectCustomerState } from '../reducers/customer.reducer';



export const selectCustomerList = createSelector(selectCustomerState, (state:CustomerState) => state.customerList);
export const selectCustomerIsLoading = createSelector(selectCustomerState, (state:CustomerState) => state.isLoading);
