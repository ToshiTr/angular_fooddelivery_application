# FoodOrderApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Points-------
1.Please dont refresh the page after login, this will make user logged out and all the data that is set dynamically will be lost.
Only the static data will remain(Restaurant and its menu is set statically)

I have created module for every component and used lazy loading.
because there isn't any data sharing between them.
All the data sharing are done by the shared service which isn't included inside module
However, in restaurant module, i have included 4 components since they have parent and child relationship and they shared data
LoginComponent and NotFoundComponent aren't included inside module or lazy loading.
------------------------------------ Lists of Component----------------
1.LoginComponent
2.RegistrationComponent
These components are to login and register.

3.RestaurantsListingComponent
This component is the restaurant Listing page, after successfully login, user will be redirect to this page, also this is the home page.

4.RestaurantDetailComponent

This Component display the details of a Restaurant such as name, rating, address, contact info etc
and it has one functionality which allow user to add the Restaurant as their favourite.
(This is done by clicking on the Heart Icon below the Restaurant name).
Apart from that,
RestaurantDetailComponent has a child component named RestaurantMenuComponent, which is used to display the list of Restaurant Menu.

Note:-
RestaurantDetailComponent has two child Component RestaurantMenuComponent and RestaurantReviewsComponent
Instead of Creating RestaurantMenuComponent as a separate component, i have used it as a child component of RestaurantDetailComponent.

5.RestaurantMenuComponent( Menu and Ordering)
This component display list of Restaurant Menu that is the Food Item/dishes, and it has one functionality tht's add To cart.

6.RestaurantReviewsComponent
This component displays a list of restaurant rating and reviews

7.ShoppingCartComponent 

It diplays food Item data that are added in the cart,
Others Info are illustrated in the service class

8.CartCheckoutComponent

This is the checkout page after the ShoppingCartComponent, This enables user to select from the the existing saved address 
and also allows user to add new address.

Assumption:->
Here, the existing saved address is satic data(as we aren't using any database).
It also displays the list of cart item.

9.FavouriteRestaurantComponent

Note :
User cannot add restaurant as favourite from Restaurant listing page
2.How To add a Restuarant as Favourite?
In the Restaurant Detail Page, there's a Heart Icon below to Restaurant name, click on it 
and a modal will popup saying that the Restuarant is added as Favourite and Heart icon will turn red,
now, again licking on the red heart icon it will removed the Restaurant from favourite list.


1.In Order to be add a restaurant as Favourtie, the favourite attribute of the restaurant must be true
In Ts file, I've filter all the favourite Restuarant and then display it to the template.
This component display a list of favourite restaurant and 
clicking on the Restaurant name will navigate to restuarnt Detail Page.
Clicking on the Red Heart Icon will remove the Restaurant from the Favourite List.


10.OrderTrackingComponent

Note-
User can only rate and review from OrderTrackingComponent

This component displays list of Order Details,which contains Restaurant name,
quantity, the ordered food Item from the restaurant , date, price, 
status ("order received," "preparing," "out for delivery," and "delivered)
After Placing Order please dont refresh the page, so that the data doesn't get lost as we aren't using any server/database,
and see the status of the order will change after every 1 min until the status is Delivered.

Rating functionality
User will be Shown the Rating Functionality only after the Status of Ordered is Changed to Delivered.
Click on submit button to submit your rating and reviews after that go to that Particular restaurant Detail page and check on reviews

Reorder
Clicking on Reorder will add that particular foodItem to cart and it will navigate user to the cart page.

11.OrderPlaced component 
 This page displays the order details and invoice
12.NotFoundComponent
  To diplay 404

