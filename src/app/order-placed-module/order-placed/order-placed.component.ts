import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeliveryAddress } from 'src/app/shared/model/address';
import { CartService } from 'src/app/shared/service/cart_service/cart.service';
import { DeliveryAddressService } from 'src/app/shared/service/delivery-address_service/delivery-address.service';
import { OrderService } from 'src/app/shared/service/order-detail_service/order.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})
export class OrderPlacedComponent implements OnInit,OnDestroy {

  cartTotalAmount!: number;
  cartSubTotalAmount : number = 0;
  deliveryAddress!: DeliveryAddress;

  constructor(private cartService: CartService,
    private deliveryaddressService: DeliveryAddressService,
    private orderService:OrderService) {}
 
  ngOnInit(): void {
    this.cartTotalAmount = this.getCartTotalAmount();
    this.cartSubTotalAmount += this.cartTotalAmount;
    this. getDeliveryAddress();
  }
  getCartTotalAmount() : number {
    return this.cartService.gettotalCartAmount();
  }
  getDeliveryAddress() {
    console.log(this.deliveryaddressService.getSelectedDeliveryAddress());
    this.deliveryAddress = this.deliveryaddressService.getSelectedDeliveryAddress();

  }
  ngOnDestroy(): void {
    //setting cart data to empty after placing order
    console.log("Destroy component");
    this.cartService.setCartToEmpty();
  }
}
