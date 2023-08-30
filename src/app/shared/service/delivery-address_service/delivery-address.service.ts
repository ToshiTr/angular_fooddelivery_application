import { Injectable } from '@angular/core';
import { DeliveryAddress } from '../../model/address';

@Injectable({
  providedIn: 'root'
})
export class DeliveryAddressService {

  deliveryAddress!: DeliveryAddress;
  constructor() { }

  getSelectedDeliveryAddress() : DeliveryAddress{
    return this.deliveryAddress;
  }

  //
  setSelectedDeliveryAddress(deliveryAddress : DeliveryAddress) {
   this.deliveryAddress = deliveryAddress;
  }
}
