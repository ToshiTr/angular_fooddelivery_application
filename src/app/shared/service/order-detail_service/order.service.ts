import { Injectable } from '@angular/core';
import { RestaurantsService } from '../restaurants_service/restaurants.service';

import { BehaviorSubject } from 'rxjs';
import { OrderData } from '../../model/orderData';
import { CartData } from '../../model/cartData';
import { Restaurant } from '../../model/food';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderedItems : OrderData[] = [];
  orderItem !: OrderData;

  constructor(private restaurantService : RestaurantsService) { }

  private orderSubject: BehaviorSubject<OrderData[]> = new BehaviorSubject<OrderData[]>(this.orderedItems);


  getOrderdItems(): OrderData[] {
    return this.orderedItems;
  }

  setOrderedItems(cartItem : CartData[]) {
    if(cartItem != null || cartItem!= undefined) {
      
      cartItem.forEach( item =>
        {
          let restDetails : Restaurant = new Restaurant() ;
          restDetails = this.restaurantService.getRestaurantByRestMenuId(item.foodItem.id);
          this.orderItem = {
            orderId: 1,
            restaurant: restDetails,
            foodItem: item.foodItem,
            quantity: item.quantity,
            totalPrice: item.totalPrice,
            status: 'Order Received',
            timestamp: new Date(),
          }
          this.orderedItems.push(this.orderItem);

        })
      }
  }
//since in this project we aren't using database/server, so we're using seInterval() to update 
//the status after every 1 min(or we can increase the time accordingly),
//we all know in real-time it takes more time, althugh this is just for the demonstration purpose
  
updateOrderStatus(){
    const intervalId = setInterval(() => {
    
      this.orderedItems.forEach(order => {
        if (order.status === 'Order Received') {
          order.status = 'preparing';
        }
        else if (order.status === 'preparing') {
          order.status = 'out for delivery';
        }
        else if (order.status === 'out for delivery') {
          order.status = 'Delivered';
          clearInterval(intervalId);
          return;
        }
        console.log(order.status);
      });
     
      this.orderSubject.next(this.orderedItems);
    }, 60000); // 1 minute in milliseconds
  }
}
