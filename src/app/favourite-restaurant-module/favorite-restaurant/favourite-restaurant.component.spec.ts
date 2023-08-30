import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteRestaurantComponent } from './favourite-restaurant.component';

describe('FavouriteRestaurantComponent', () => {
  let component: FavouriteRestaurantComponent;
  let fixture: ComponentFixture<FavouriteRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteRestaurantComponent]
    });
    fixture = TestBed.createComponent(FavouriteRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
