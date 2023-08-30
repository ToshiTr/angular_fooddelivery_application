import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteRestaurantComponent } from './favorite-restaurant/favourite-restaurant.component';

const routes: Routes = [
  { path: 'favourite-restaurant', component: FavouriteRestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteRestaurantRoutingModule { }
