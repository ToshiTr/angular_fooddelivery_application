import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartCheckoutRoutingModule } from './cart-checkout-routing.module';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartCheckoutComponent
  ],
  imports: [
    CommonModule,
    CartCheckoutRoutingModule,
    FormsModule
  ]
})
export class CartCheckoutModule { }
