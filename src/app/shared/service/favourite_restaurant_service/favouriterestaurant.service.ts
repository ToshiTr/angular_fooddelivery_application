import { Injectable } from '@angular/core';
import { Restaurant } from '../../model/food';

@Injectable({
  providedIn: 'root'
})
//I have created this service in order to store list of favourite restaurant
//We know that we already have favourite attribute in Restaurant DTO, 
//which can be use to check for fav restaurnat by looping through the restaurant list
//Why storing the fav restaurant data separately in service?
//The reason is what if we have large amount of data lets say 1000000000 and only few of the restaurant is
//favourite( Restaurant DTO favourite attribute is true) , in this case we will have to loop through all of the 
//list which will increase the Time complexcity
//
export class FavouriterestaurantService {

  favouriteRestaurant : Restaurant[] = [];
  constructor() { }

  //double checking the condition before adding to fav restrnt list
  setfavRestaurant(restaurant : Restaurant){
    if((restaurant != null || restaurant != undefined) &&  (restaurant.favourite === true)) {
       this.favouriteRestaurant.push(restaurant);
    }
  }
  getfavouriteRestaurant() : Restaurant[]{
    return this.favouriteRestaurant;
  }
}
