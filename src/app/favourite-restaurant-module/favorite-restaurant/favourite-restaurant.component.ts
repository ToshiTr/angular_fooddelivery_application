import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/shared/model/food';
import { FavouriterestaurantService } from 'src/app/shared/service/favourite_restaurant_service/favouriterestaurant.service';

@Component({
  selector: 'app-favourite-restaurant',
  templateUrl: './favourite-restaurant.component.html',
  styleUrls: ['./favourite-restaurant.component.css']
})
export class FavouriteRestaurantComponent implements OnInit{

  emptyFavRestaurantMsg = "No favourite restaurant added yet!!";
  favouriteRestaurant : Restaurant[] = [];
  constructor(private favrestuarantService: FavouriterestaurantService){}
  ngOnInit(): void {
   
    //double checking the condition
    this.favouriteRestaurant = this.favrestuarantService.getfavouriteRestaurant().filter( rest => rest.favourite===true);
  }

  //make restaurant as favourite and removed restaurant from favourite list
  addToFavourite(restaurant : Restaurant) {
    restaurant.favourite = !restaurant.favourite;
  }
}
