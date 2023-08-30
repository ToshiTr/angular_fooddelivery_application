import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderPlacedRoutingModule } from './order-placed-routing.module';
import { OrderPlacedComponent } from './order-placed/order-placed.component';


@NgModule({
  declarations: [
    OrderPlacedComponent
  ],
  imports: [
    CommonModule,
    OrderPlacedRoutingModule
  ]
})
export class OrderPlacedModule { }
