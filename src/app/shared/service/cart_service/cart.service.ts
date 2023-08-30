import { Injectable } from '@angular/core';
import { CartData } from '../../model/cartData';
import { Food } from '../../model/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartData!: CartData;

  cartDataList: CartData[] = [];

  totalCartQuantity!: number;
  totalCartAmount!: number;

  constructor() { }


  addToCart(foodItem: Food, restId : number) {
    
    //If the product is already added to cart then just increase the quantity of that product in cart
    if (this.cartDataList.find(cartData => cartData.foodItem.id === foodItem.id)) {
        this.cartDataList.forEach(cartData => {
        if (cartData.foodItem.id === foodItem.id) {
           cartData.quantity = cartData.quantity + 1;
        }
      }
      );
    } 
    //If the product is not added to cart then add the product to cart with quantity as one by default
    else {
      let foodPrice = foodItem.price * 1;
      this.cartData = new CartData(restId,foodItem, 1, foodPrice);
      this.cartDataList.push(this.cartData);
    }
  }

  //remove the product from cart
  removeFromCart(foodItemId: number) {
    this.cartDataList = this.cartDataList.filter(item => item.foodItem.id != foodItemId);
  }

  updateQty(cartData: CartData, action: string) {

    //increase qty, maximum qty allowes is 10
    if (action === "inc" && cartData.quantity < 10) {
      cartData.quantity = cartData.quantity + 1;
    }
    //decrease qty, item qty cannot be less than 1
    else if (action === "dec" && cartData.quantity > 1) {
      cartData.quantity = cartData.quantity - 1;
    }
    cartData.totalPrice = cartData.totalPrice * cartData.quantity;
    this.gettotalCartAmount();
  }

  //it calculate the cart total amount
  gettotalCartAmount() {
    let countTotalCartAmount: number = 0;
    this.cartDataList.forEach(item => {
      countTotalCartAmount += item.getTotalPrice();
    })
    return countTotalCartAmount;
  }

  //return cartDataList
  getCart(): CartData[] {
    return this.cartDataList;
  }

  //set cart to empty
  setCartToEmpty(){
    this.cartDataList = [];
  }

}
