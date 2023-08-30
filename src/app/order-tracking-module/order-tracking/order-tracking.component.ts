import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderData } from 'src/app/shared/model/orderData';
import { CartService } from 'src/app/shared/service/cart_service/cart.service';
import { OrderService } from 'src/app/shared/service/order-detail_service/order.service';
import { RestaurantsService } from 'src/app/shared/service/restaurants_service/restaurants.service';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent {

 
  emptyOrderMsg1 = "No Order History";
  emptyOrderMsg2 = "Please, place order to track your order!!!";


  orderedItems : OrderData[] = [];
  ratingControl = new FormControl(0);
  reviewMessage = new FormControl();
  ratingValue:number = 0;
  ratingMessage : string = "Thank you for your feedback! Your rating has been submitted successfully.";

  constructor(private orderService :OrderService,
    private cartService : CartService,
    private restService : RestaurantsService,
    private router : Router){}

  ngOnInit(): void {

      this.orderedItems = this.orderService.getOrderdItems();
      this.orderService.updateOrderStatus();
    
  }

  //Reordering the item, this will add the item to cart and the page will redicted to cart page
  reorderItem(orderdata : OrderData){
     this.cartService.addToCart(orderdata.foodItem,orderdata.restaurant.id); // since our cart holds the foodItem/dishes we ae passing foodItem to cart
     this.router.navigate(['/cart/add-to-cart']);
  }

  onsubmit(restId : number, frm : NgForm){
  
    if(this.ratingControl.value != null){
      this.ratingValue = this.ratingControl.value;
    }
    let review = frm.form.controls['reviewMessage'].value;
    this.restService.setRestaurantReviews(restId,this.ratingValue,review);
    frm.reset();
  }
}
