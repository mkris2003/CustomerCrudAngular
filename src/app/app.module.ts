
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { UpdateCustomerComponent } from './Components/update-customer/update-customer.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ViewCustomerComponent } from './Components/view-customer/view-customer.component';
import { CreateCustomerComponent } from './Components/create-customer/create-customer.component';
import { CustomerService } from './services/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { customerFeatureKey, customerReducer } from './store/reducers/customer.reducer';
import { CustomerEffects } from './store/effects/customer.effects';

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
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(customerFeatureKey, customerReducer),
    EffectsModule.forFeature([CustomerEffects])
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
