import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CartData } from 'src/app/shared/model/cartData';
import { DeliveryAddress } from 'src/app/shared/model/address';
import { CartService } from 'src/app/shared/service/cart_service/cart.service';
import { SavedAddressService } from 'src/app/shared/service/delivery-address_service/saved-address.service';
import { DeliveryAddressService } from 'src/app/shared/service/delivery-address_service/delivery-address.service';
import { OrderService } from 'src/app/shared/service/order-detail_service/order.service';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements  OnInit{

  cartDataList!: CartData[];
  cartTotalAmount!: number;
  savedDefaultAddress!: DeliveryAddress[];
  deliveryAddress!: DeliveryAddress;
  isShow: boolean = true;


  constructor(private cartService: CartService,
    private savedAddress: SavedAddressService,
    private deliveryaddressService: DeliveryAddressService,
    private orderService : OrderService,
    private router: Router) {}
 
  ngOnInit(): void {
    this.getCart();
    this.cartTotalAmount = this.getCartTotalAmount();
    this.savedDefaultAddress = this.getSavedDefaultDeliveryAddress();
    this.deliveryAddress = this.savedDefaultAddress.at(this.savedDefaultAddress.length - 1) as DeliveryAddress;
    this.setSelectedAdd(this.deliveryAddress);
  }
  getCartTotalAmount() : number {
    return this.cartService.gettotalCartAmount();
  }
  //get the Cart Data
  getCart(){
    this.cartDataList = this.cartService.getCart();
  }

  //get existing saved address
  getSavedDefaultDeliveryAddress() {
    return this.savedAddress.getSavedDeliveryAddress(); 
  }

  //adding new address to saved adaress, reset the form,
  onSubmit(frm : NgForm) {

      this.deliveryAddress = {
        houseNo: frm.value.houseNo,
        street: frm.value.street,
        city: frm.value.city,
        state: frm.value.state,
        zipcode: frm.value.zipcode,
        country: frm.value.country,
      };
      this.savedDefaultAddress.push(this.deliveryAddress);
      frm.reset();
      //make this as delivery address
      this.setSelectedAdd(this.deliveryAddress);
      this.addNewAddress();
  }

  //this is to toggle the Add New Address radio button
  addNewAddress() {
    this.isShow = !this.isShow;
  }

  //set selected delivery address( the address at which ordered will be delivered)
  setSelectedAdd(address : DeliveryAddress) {
     this.deliveryaddressService.setSelectedDeliveryAddress(address);
  }

  //For now, we will passed cartDara to orderdata which'll later get converted to Orderdata
  orderPlaced(cartDataList: CartData[]){
     this.orderService.setOrderedItems(cartDataList);
     this.router.navigate(['/cart/order-placed']);
  }
}
