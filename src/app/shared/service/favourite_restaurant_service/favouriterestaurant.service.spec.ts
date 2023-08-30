import { TestBed } from '@angular/core/testing';

import { FavouriterestaurantService } from './favouriterestaurant.service';

describe('FavouriterestaurantService', () => {
  let service: FavouriterestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriterestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
