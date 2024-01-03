import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './Components/create-customer/create-customer.component';
import { HomeComponent } from './Components/home/home.component';
import { UpdateCustomerComponent } from './Components/update-customer/update-customer.component';
import { ViewCustomerComponent } from './Components/view-customer/view-customer.component';

const routes: Routes = [
  {
    path: "create",
    component: CreateCustomerComponent
  },
  {
    path: "update/:id",
    component: UpdateCustomerComponent   
  },
  {
    path: "view",
    component: ViewCustomerComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
