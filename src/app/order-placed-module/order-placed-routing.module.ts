import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPlacedComponent } from './order-placed/order-placed.component';

const routes: Routes = [
  { path: 'order-placed', component: OrderPlacedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderPlacedRoutingModule { }
