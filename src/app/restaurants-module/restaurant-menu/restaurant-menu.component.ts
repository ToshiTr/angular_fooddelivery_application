import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Food } from 'src/app/shared/model/food';
import { CartService } from 'src/app/shared/service/cart_service/cart.service';
import { RestaurantsService } from 'src/app/shared/service/restaurants_service/restaurants.service';
@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {

  foodItems!: Food[];
  foodItem!: Food;
  starRating: any;
  addToCartMsg: string = '';
  title = 'appBootstrap';
  restaurantId !: number;

  closeResult: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantsService,
    private cartService: CartService,
    private modalService: NgbModal)
    { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(param => {
      if (param['restId']) {
        this.restaurantId = param['restId'];
        this.foodItems = this.restaurantService.getRestaurantMenuById(param['restId']);
      }
    });
  }

  //add to cart functionality
  addToCart(foodItem: Food): boolean {
    this.cartService.addToCart(foodItem,this.restaurantId);
    this.addToCartMsg = "Item added to cart successfully!!";
    return true;
  }

  viewCart() {
    this.router.navigateByUrl('/cart/add-to-cart');
    this.modalService.dismissAll();
  }

  //open & close the add to cart message modal popup
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
