import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/shared/model/food';
import { RestaurantsService } from 'src/app/shared/service/restaurants_service/restaurants.service';

@Component({
  selector: 'app-restaurant-reviews',
  templateUrl: './restaurant-reviews.component.html',
  styleUrls: ['./restaurant-reviews.component.css']
})
export class RestaurantReviewsComponent implements OnInit{
  
  restaurantId!: number;
  restaurantReview : Review[] = [];
  emptyReviewMessage = "No Reviews added for this Restaurant!!!";
  constructor(private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantsService)
    { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      if (param['restId']) {
        this.restaurantId = param['restId'];
        this.restaurantReview = this.restaurantService.getRestaurantReviewByRestId(this.restaurantId);
      }
    });
  }
}
