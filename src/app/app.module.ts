
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { UpdateCustomerComponent } from './Components/update-customer/update-customer.component';

import { ViewCustomerComponent } from './Components/view-customer/view-customer.component';
import { CreateCustomerComponent } from './Components/create-customer/create-customer.component';
import { CustomerService } from './services/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    UpdateCustomerComponent,    
    ViewCustomerComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
