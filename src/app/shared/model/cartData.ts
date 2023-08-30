import { Food } from "./food";

//cart for each foodItem
export class CartData {

    cartId!:number;
    restaurantId!:number;
    foodItem!:Food;
    quantity!:number;
    totalPrice!:number;

    // constructor(){}
    constructor(restaurantId :number,foodItem : Food,quantity : number,totalPrice:number){
        this.restaurantId = restaurantId;
        this.foodItem = foodItem;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
     }

    getTotalPrice(): number {
        return this.quantity*this.foodItem.price;
    }
}

export class CartDataList {

    cartData!: CartData[];
    cartTotalPrice!: number;

    constructor(cartData: CartData[] ,cartTotalPrice:number) {
        this.cartData = cartData;
        this.cartTotalPrice = cartTotalPrice;
    }


}