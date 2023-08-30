import { Component } from '@angular/core';
import { Restaurant } from 'src/app/shared/model/food';
import { RestaurantsService } from 'src/app/shared/service/restaurants_service/restaurants.service';

@Component({
  selector: 'app-restaurants-listing',
  templateUrl: './restaurants-listing.component.html',
  styleUrls: ['./restaurants-listing.component.css']
})
export class RestaurantsListingComponent {
  restaurants : Restaurant[] = [];

  constructor(private restaurantService: RestaurantsService){
    this.restaurants = this.restaurantService.getAllRestaurantList();

  }
}
