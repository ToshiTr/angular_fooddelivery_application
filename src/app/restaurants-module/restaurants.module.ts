import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsListingComponent } from './restaurants-listing/restaurants-listing.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { RestaurantReviewsComponent } from './restaurant-reviews/restaurant-reviews.component';

@NgModule({
  declarations: [
    RestaurantDetailComponent,
    RestaurantsListingComponent,
    RestaurantMenuComponent,
    RestaurantReviewsComponent,
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    NgbRatingModule,
    NgxStarRatingModule,
  ],
  exports:[
  ]
})
export class RestaurantsModule { }
