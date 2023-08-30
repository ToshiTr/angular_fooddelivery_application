import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsListingComponent } from './restaurants-listing/restaurants-listing.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { RestaurantReviewsComponent } from './restaurant-reviews/restaurant-reviews.component';

const routes: Routes = [
  
  { path: 'restaurants-listing', component: RestaurantsListingComponent },
  { path: 'restaurant-details/:id', component: RestaurantDetailComponent,
   children: [
    {
      path: 'restaurant-menu/:restId', component: RestaurantMenuComponent
    },
    {
      path: 'restaurant-review/:restId', component: RestaurantReviewsComponent
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
