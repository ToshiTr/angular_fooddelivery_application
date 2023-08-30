import { Injectable } from '@angular/core';
import { DeliveryAddress } from '../../model/address';

@Injectable({
  providedIn: 'root'
})
export class SavedAddressService {

  constructor() { }

  //existing saved delivery address static data
  savedAddress: DeliveryAddress[] =[
    {
      houseNo:"12ABHFH56",
      street: "Konapanna Agrahara",
      city:"Electronic City",
      zipcode: 560100,
      state:"Karnataka",
      country:"India",
    },
    {
      houseNo:"12HKDF57",
      street: "Neeladri",
      city:"Electronic City",
      zipcode: 560100,
      state:"Karnataka",
      country:"India",
    }
  ]

  //return saved address
  getSavedDeliveryAddress() : DeliveryAddress[] {
    return this.savedAddress;
  }
}
