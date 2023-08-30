import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './guards/login.guard';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  {
    path: 'user', loadChildren: () =>
      import('./registration-module/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'restaurant', loadChildren: () =>
      import('./restaurants-module/restaurants.module').then(m => m.RestaurantsModule)
      ,canActivate : [loginGuard]
  },
  {
    path: 'wishlist', loadChildren: () =>
    import('./favourite-restaurant-module/favourite-restaurant.module').then(m => m.FavouriteRestaurantModule)
    ,canActivate : [loginGuard]
  },
  {
    path: 'track-order', loadChildren: () =>
    import('./order-tracking-module/order-tracking.module').then(m => m.OrderTrackingModule)
    ,canActivate : [loginGuard]
  },
  {
    path: 'cart', loadChildren: () =>
    import('./shopping-cart-module/shopping-cart.module').then(m => m.ShoppingCartModule)
    ,canActivate : [loginGuard]
  },
  {
    path: 'cart', loadChildren: () =>
    import('./cart-checkout-module/cart-checkout.module').then(m => m.CartCheckoutModule)
    ,canActivate : [loginGuard]
  },
  {
    path: 'cart', loadChildren: () =>
    import('./order-placed-module/order-placed.module').then(m => m.OrderPlacedModule)
    ,canActivate : [loginGuard]
  },
  { path: '**', component: NotfoundComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
