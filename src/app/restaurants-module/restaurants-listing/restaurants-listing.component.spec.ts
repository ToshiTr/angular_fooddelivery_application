import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsListingComponent } from './restaurants-listing.component';

describe('RestaurantsListingComponent', () => {
  let component: RestaurantsListingComponent;
  let fixture: ComponentFixture<RestaurantsListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantsListingComponent]
    });
    fixture = TestBed.createComponent(RestaurantsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
