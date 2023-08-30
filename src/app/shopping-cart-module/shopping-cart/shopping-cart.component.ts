import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartData } from 'src/app/shared/model/cartData';
import { CartService } from 'src/app/shared/service/cart_service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  AddTocartMsg1 = "Opps Empty Cart!!";
  AddTocartMsg2 = "Click here, To Add Item To Cart";

  cartDataList!: CartData[];
  cartTotalAmount!: number;
  constructor(private cartService: CartService){}
  
  ngOnInit(): void {
    this.setCart();
   }

  //increase/ decrease qty
  updateQty(cartData: CartData, action: string) {
      this.cartService.updateQty(cartData,action);
      this.updateCartTotalAmount();
  }

  //upodate Cart Total Amount
  updateCartTotalAmount(){
    this.cartTotalAmount = this.cartService.gettotalCartAmount();
  }

  //set cart
  setCart(){
    this.cartDataList = this.cartService.getCart();
    this.updateCartTotalAmount();
  }

  //setCart after removing items from the cart so that the updated cart data can be displayed
  removeFromCart(foodItemId: number){
    this.cartService.removeFromCart(foodItemId);
    this.setCart();
  }

}
