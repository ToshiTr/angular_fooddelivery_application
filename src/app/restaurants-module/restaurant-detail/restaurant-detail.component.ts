import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal , ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from 'src/app/shared/model/food';
import { FavouriterestaurantService } from 'src/app/shared/service/favourite_restaurant_service/favouriterestaurant.service';
import { RestaurantsService } from 'src/app/shared/service/restaurants_service/restaurants.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant!: Restaurant;
  closeResult: string = '';
  addToFavMessage: string ='';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantsService,
    private modalService: NgbModal,
    private favRestaurantService : FavouriterestaurantService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      if (param['id']) {
        this.restaurant = this.restaurantService.getRestaurantById(param['id']);
      }

    });
  }

  //make restaurant as favourite and removed restaurant from favourite list
  addToFavourite(restaurant : Restaurant) : boolean{
    if(restaurant.favourite === false){
      this.addToFavMessage = "Restaurant added as Favourite";
    }else{
      this.addToFavMessage = "Restaurant removed from Favourite";
    }
    restaurant.favourite = !restaurant.favourite;
    this.favRestaurantService.setfavRestaurant(restaurant);
    return true;
  }

  viewFavourite(){
    this.router.navigate(['/wishlist/favourite-restaurant']);
    this.modalService.dismissAll();
  }

  //This are to open and close modal popup
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

