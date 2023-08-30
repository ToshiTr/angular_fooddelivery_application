import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteRestaurantRoutingModule } from './favourite-restaurant-routing.module';
import { FavouriteRestaurantComponent } from './favorite-restaurant/favourite-restaurant.component';

@NgModule({
  declarations: [
    FavouriteRestaurantComponent
  ],
  imports: [
    CommonModule,
    FavouriteRestaurantRoutingModule,
  ]
})
export class FavouriteRestaurantModule { }
