import { Food, Restaurant } from "./food";

//This contains the OrderData details id , foodItem, qty and total price
export class OrderData{
    orderId !: number;
    restaurant !: Restaurant;
    foodItem!:Food;
    quantity!:number;
    totalPrice!:number;
    status !: string;
    timestamp : Date = new Date();
}
