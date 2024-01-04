import { Customer } from "../../models/customer";

export interface CustomerState {
    customerList:Customer[];
    isLoading: boolean;
}
