import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderTrackingRoutingModule } from './order-tracking-routing.module';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    OrderTrackingComponent,
  ],
  imports: [
    CommonModule,
    OrderTrackingRoutingModule,
    NgbRatingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class OrderTrackingModule { }
