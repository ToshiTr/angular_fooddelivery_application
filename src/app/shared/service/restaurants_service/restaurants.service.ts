import { Injectable } from '@angular/core';
import { Food, Restaurant, Review } from '../../model/food';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  //We have set static rating on every restaurant and numberOfRater as 1
  //Cosidering one user has rated a restaurant as (like 4.0 in below examples)
  restaurants : Restaurant[] =  [
    {
      id : 1,
      name : "McDonald's",
      price : 150,
      favourite : false,
      avgrating: 4.0,
      numberOfRaters:1,
      reviews:[],
      image:'/assets/mcDonalds.jpg',
      deliveryTime:'22 min',
      cuisines:['Burger', 'Fast Food', 'Desserts', 'Beverages'],
      address:"Neeladri Road, Bangalore",
      contact:"+91-8928304293",
      menu:[
        {
          id: 1,
          name: "Big Spicy Paneer Wrap + Coke + Fries (M) + Veg Pizza McPuff",
          price: 367,
          rating: 4.4,
          image: "/assets/foods/macD/macD1.jpg",
          detail:"Treat yourself today with these exclusive Coke combos. Huge discounts on your favourite meals. Get a Big Spicy Paneer Wrap + Coke + Fries (M) + Veg Pizza McPuff today!"
        },
        {
          id: 2,
          name: "McChicken Burger + Fries (L) + Coke",
          price: 348,
          rating: 4.7,
          image: "/assets/foods/macD/macD2.jpg",
          detail:"Get the best value in your meal for 2. Save big on your favourite sharing meal - McChicken Burger + Fries (L) + Coke"
        },
        {
          id: 3,
          name: "Fries (M) + McSpicy Chicken Burger",
          price: 398,
          rating: 4.4,
          image: "/assets/foods/macD/macD3.jpg",
          detail:"Get the best value in your meal for 2. Save big on your favourite sharing meal - Fries (M) + McSpicy Chicken Burger"
        },
        {
          id: 4,
          name: "2 PC Mcspicy Fried chicken",
          price: 367,
          rating: 4.4,
          image: "/assets/foods/macD/macD4.jpg",
          detail:"Two pieces of the new McSpicy Fried chicken that are juicy, crunchy and spicy to the last bite!"
        },
      ],
    },
    {
      id : 2,
      name : 'Corner House Ice Creams',
      price : 200,
      favourite : false,
      avgrating: 4.5,
      reviews:[],
      numberOfRaters:1,
      image:'/assets/cornerHouseIceCreams.jpg',
      deliveryTime:'18 min',
      cuisines:['Ice Cream', 'Desserts', 'Shake'],
      address:"Electronic City, Bangalore",
      contact:"+91-9900545172",
      menu:[
        {
          id: 5,
          name: "Hot Caramelo Pudding",
          price: 175,
          rating: 4.8,
          image: "/assets/foods/icecream/icecream1.jpg",
          detail:"Sticky Toffee pudding served hot, with Nut Butterscotch ice ream and topped with caramel sauce."
        },
        {
          id: 6,
          name: "Chocolate Truffle With Ice Cream And Chocolate Sauce",
          price: 200,
          rating: 4.3,
          image: "/assets/foods/icecream/icecream2.jpg",
          detail:"A chocolate ganache pastry served warm, with vanilla ice cream and topped with hot chocolate sauce."
        },
        {
          id: 7,
          name: "Rich Chocolate Torte",
          price: 340,
          rating: 4.5,
          image: "/assets/foods/icecream/icecream3.jpg",
          detail:"Rich moist chocolate cake served warm with vanilla ice cream and chocolate sauce and topped with a cocoa nib crumble."
        },
        {
          id: 8,
          name: "Dew Drop Sundae",
          price: 200,
          rating: 4.0,
          image: "/assets/foods/icecream/icecream4.jpg",
          detail:"Two scoops of Fig & Honey ice cream topped with cream, honey and roasted cashew nuts."
        },
       
       
       
      ],
    },
    {
      id : 3,
      name : "Domino's Pizza",
      price : 300,
      favourite : false,
      avgrating: 3.7,
      numberOfRaters:1,
      reviews:[],
      image:'/assets/dominos-Pizza.jpg',
      deliveryTime:'20 min',
      cuisines:['Pizza','Fast Food'],
      address:"MG Road, Bangalore",
      contact:"+91-18002081234",
      menu:[
        
        {
          id: 9,
          name: "Farmhouse Pizza",
          price: 269,
          rating: 4.5,
          image: "/assets/foods/pizza/pizza1.jpg",
          detail:"Delightful combination of onion, capsicum, tomato & grilled mushroom. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options."
        },
        {
          id: 10,
          name: "Margherita Pizza",
          price: 109,
          rating: 4.0,
          image: "/assets/foods/pizza/pizza2.jpg",
          detail:"Classic delight with 100% real mozzarella cheese. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options."
        },
        {
          id: 11,
          name: "Veg Extravaganza Pizza",
          price: 319,
          rating: 3.6,
          image: "/assets/foods/pizza/pizza3.jpg",
          detail:"Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options."
        },
        {
          id:12,
          name: "Pepper Barbecue Chicken Pizza",
          price: 259,
          rating: 4.8,
          image: "/assets/foods/pizza/pizza4.jpg",
          detail:"Pepper barbecue chicken for that extra zing. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options."
        }
      ],
    },
    {
      id : 4,
      name : 'Daily Sushi',
      price : 150,
      favourite : false,
      avgrating: 4.5,
      numberOfRaters:1,
      reviews:[],
      image:'/assets/daily-sushi.jpg',
      deliveryTime:'56 min',
      cuisines:['Sushi', 'Japanese', 'Korean', 'Asian', 'Beverages'],
      address:"ECity Phase 2, Bangalore",
      contact:"+91-9366897656",
      menu:[
        {
          id:13,
          name: "Unagi Egg Nigiri Sushi",
          price: 900,
          rating: 4.5,
          image: "/assets/foods/sushi/sushi1.jpg",
          detail:"Egg Nigiri Sushi. KID APPROVED. Egg Nigiri Sushi.6 pcs Sweet egg roll, Sticky rice, Wasabi Allergy: Egg.900 | NV | 150g | 835 kcal | 6 pcs Grilled Eel Fish, Egg, Sticky rice Allergy: Egg, Fish, Soya, Sulphites"
        },
        {
          id:14,
          name: "Salmon Tataki Sushi",
          price: 710,
          rating: 4.7,
          image: "/assets/foods/sushi/sushi2.jpg",
          detail:"Tataki is a Japanese cooking technique used primarily for cooking fish or Meat. High temperature to allow a quick sear on the outside of the fish, with the inside remaining raw. 150g | 523kcal | 6pcs Ingredients: Salmon, Sticky rice, Wasabi, Soya sauce, Ginger pickle Garnish: Raw onion, Ponzu Tataki sauce, Mayonnaise Allergy: Fish, Soya, Sulphites."
        },
        {
          id:15,
          name: "Hamachi Sushi",
          price: 860,
          rating: 4.2,
          image: "/assets/foods/sushi/sushi3.jpg",
          detail:"860 | NV | 150g | 306 kcal | 6 pcs Raw Yellowtail, Sticky rice Allergy: Fish, Sulphites, Soya"
        },
        {
          id:16,
          name: "Salmon Sushi",
          price: 790,
          rating: 4.4,
          image: "/assets/foods/sushi/sushi4.jpg",
          detail:"It is a salmon sushi made with the fresh Norwegian salmon. Salmon is a healthy diet rich in omega 3 and essential fatty acids, and you can get the recommended nutrients you need a day. 150g | 523 kcal | 6 pcs Raw salmon, Sticky rice, Wasabi Allergy: Fish."
        },
      ],
    },
    {
      id : 5,
      name : 'Big Bowl',
      price : 100,
      favourite : false,
      avgrating: 4.0,
      numberOfRaters:1,
      reviews:[],
      image:'/assets/bigBowl.jpg',
      deliveryTime:'40 min',
      cuisines:['NorthEast Indian', 'Chinese','Japanese'],
      address:"St Benedict Academy, Bangalore",
      contact:"+91-8041537259",
      menu:[
        {
          id: 17,
          name: "Kung Pao Chicken Bowl",
          price: 345,
          rating: 4.3,
          image: "/assets/foods/bigbowl/bigbowl1.jpg",
          detail:"Diced chicken & veggies tossed in kung pao sauce, served with choice of Rice/ Noodle."
        },
        {
          id: 18,
          name: "Non-Veg Chinese Bowl with Dessert",
          price: 358,
          rating: 4.7,
          image: "/assets/foods/bigbowl/bigbowl2.jpg",
          detail:"Non-Veg Chinese Bowl with Dessert."
        },
        {
          id: 19,
          name: "Veg Chilli Garlic Noodles Bowl",
          price: 209,
          rating: 4.0,
          image: "/assets/foods/bigbowl/bigbowl3.jpg",
          detail:"Noodles tossed with carrot, capsicum & onion flavored with chilli flakes, garlic & soy, garnished with spring onion."
        },
        {
          id: 20,
          name: "Smoky Butter Chicken Rice Bowl",
          price: 309,
          rating: 4.4,
          image: "/assets/foods/bigbowl/bigbowl4.jpg",
          detail:"Smoky char-grilled chicken tossed in a rich makhani gravy served with jeera rice."
        },
       
      ],
    },
    {
      id : 6,
      name : "Seven Sister NE-Indian Resto",
      price : 150,
      favourite : false,
      avgrating: 4.5,
      numberOfRaters:1,
      reviews:[],
      image:'/assets/ne-cuisines.jpg',
      deliveryTime:'18 min',
      cuisines:['North-East Indian Food','Non-Veg','Pork','Beef','Fermented Fish'],
      address:"Electronic City Phase 1, Bangalore",
      contact:"+91-9573867463",
      menu:[
        {
          id: 22,
          name: "Pork with bamboo shoots",
          price: 350,
          rating: 4.4,
          image: "/assets/foods/nefood/nefood1.jpg",
          detail:"Pork dish with locally available green leafy vegetables and fermented bamboo shoots. In NE, we have a variety of pork dishes. From fresh to smoked Pork and there are variations in each preparations."
        },
        {
          id: 23,
          name: "Wahan Mosdeng | Pork Salad",
          price: 300,
          rating: 5.0,
          image: "/assets/foods/nefood/nefood2.jpg",
          detail:"Wahan Mosdeng is a traditional pork chutney or salad from Tripura, which is an easy and enticing recipe. As you bite into the juicy pork fat - the flavour from the roasted green chillies grooves you into a true culinary romance."
        },     
        {
          id: 24,
          name: "Stir-fried beef with bamboo shoots",
          price: 450,
          rating: 4.8,
          image: "/assets/foods/nefood/nefood3.jpg",
          detail:"This stir-fried beef with bamboo shoots is one of the popular Northeastern homestyle beef main dishes. It can be eaten on its own or served with some steamed rice."
        },
        {
          id: 25,
          name: "Lai Awan",
          price: 150,
          rating: 4.3,
          image: "/assets/foods/nefood/nefood4.jpg",
          detail:"Lai Awan is a steam sticky rice wrap with green leafy called Lai, which can served with Mosdeng (Chilli salad with fermented dry fish) and any pork dish."
        },
        {
          id: 26,
          name: "Peas boil Snack",
          price: 50,
          rating: 4.3,
          image: "/assets/foods/nefood/nefood5.jpg",
          detail:"Spicy Pea boil snack is very fondly enjoyed in the Northeastern Region of India."
        },
      ],
    },
    {
      id : 7,
      name : "Upahara Darshini",
      price : 50,
      favourite : false,
      avgrating: 4.1,
      numberOfRaters:1,
      reviews:[],
      image:'/assets/upaharaDarshini.jpg',
      deliveryTime:'30 min',
      cuisines:['South Indian','Dosa', 'North Indian'],
      address:"Konapanna Agrahara, Bangalore",
      contact:"+91-9867352745",
      menu:[
        {
          id: 27,
          name: "Ghee Masala Dosa",
          price: 105,
          rating: 4.6,
          image: "/assets/foods/upaharaDarshini/upaharaDarshini1.jpg",
          detail:"Served with Sambar & Chutney."
        },
        {
          id: 28,
          name: "Maharaja Chicken Donne Biryani",
          price: 345,
          rating: 4.6,
          image: "/assets/foods/upaharaDarshini/upaharaDarshini2.jpg",
          detail:"Traditional Karnataka military style chicken birayani with leg piece and cooked with hand grounded masalas with jeera samba rice in low flame to make it juicy and aromtic. Served with raita and gravy."
        },
        {
          id: 29,
          name: "Thatte Idli",
          price: 199,
          rating: 4.0,
          image: "/assets/foods/upaharaDarshini/upaharaDarshini3.jpg",
          detail:"The perfect breakfast plate, this duo is a hit amongst many and we've put a healthy twist on it by infusing the sambar with protein-rich dal and veggies like eggplant, pumpkin and drumsticks. Served with a side of traditional coconut chutney. "
        },
        {
          id: 30,
          name: "Onion Dosa",
          price: 115,
          rating: 4.6,
          image: "/assets/foods/upaharaDarshini/upaharaDarshini4.jpg",
          detail:"Served with Sagu & Chutney."
        },
       

      ],
    },
    {
      id : 8,
      name : "Desi Palace",
      price : 350,
      favourite : false,
      avgrating: 4.3,
      numberOfRaters:1,
      reviews:[],
      image:'/assets/desiPalace.jpg',
      deliveryTime:'29 min',
      cuisines:['North Indian', 'Biryani', 'Kebab', 'Beverages', 'Desserts', 'Rolls', 'Modern Indian'],
      address:"Hosur Rd, Bangalore",
      contact:"+91-9478267846",
      menu:[
        {
          id: 31,
          name: "North Indian Vegetarian food Thali",
          price: 465,
          rating: 4.2,
          image: "/assets/foods/desipalace/desipalace1.jpg",
          detail:"North Indian Vegetarian food Thali or food platter with assorted food in serving bowls"
        },
        {
          id: 32,
          name: "Lachha paratha",
          price: 300,
          rating: 4.0,
          image: "/assets/foods/desipalace/desipalace2.jpg",
          detail:"Lachha paratha, a layered North Indian flat bread made with whole wheat flour or atta & without egg."
        },
        {
          id: 33,
          name: "Mixed Vegetables Gravy",
          price: 265,
          rating: 4.7,
          image: "/assets/foods/desipalace/desipalace3.jpg",
          detail:"Veg Makhanwala Recipe is a popular North Indian mixed vegetable gravy that can be served for your everyday meals or even for your Party meals. This recipe has a balanced blend of spices and a creamy texture from cashew nuts and fresh cream that is added to the gravy."
        },
        {
          id: 34,
          name: "Matar Paneer",
          price: 385,
          rating: 4.3,
          image: "/assets/foods/desipalace/desipalace4.jpg",
          detail:"Cozy, Creamy and Luscious… Matar Paneer..!! Made with Cottage Cheese and Peas, simmered in a Cashew Tomato Gravy. This Classic no-fail North Indian Delicacy makes a wonderful side dish with Naan or any bread of your choice!!!."
        },
      ],
    },
  
  ];

  constructor() { }

  
  //return restaurant based on restaurant id
  getRestaurantById(restId: number) : Restaurant {

    let restaurant : Restaurant = new Restaurant() ;
    this.restaurants.map( rest => { 
     if(rest.id == restId)
       restaurant = rest;
     });
     return restaurant;
  }

  // return restaurantMenu which is of type Food based on restaurant id
  getRestaurantMenuById(restId: number) : Food[] {
    let foodItem : Food[] = [] ;
    this.restaurants.map( rest => { 
     if(rest.id == restId)
       foodItem = rest.menu;
     });
     return foodItem;
  }
  // return restaurant based on restaurantMenu id
  getRestaurantByRestMenuId(restMenuId: number) : Restaurant {
    let restaurant : Restaurant = new Restaurant() ;
    this.restaurants.map( rest => { 
      rest.menu.map(menu => {
        if(menu.id == restMenuId)
        restaurant = rest;
        return restaurant;
      });
      });
     return restaurant;
  }

  getAllRestaurantList() : Restaurant[] {
    return this.restaurants;
  }

  //calculate rating of a restaurant
  //here, We are taking three parameter Restaurant id and rating value(1 to 5)& review for that particular restaurant
  
   //storing user review in reiews array.
  
   setRestaurantReviews(restaurantId: number, rating : number, reviewMessage : string){
    let review !: Review;
    this.getAllRestaurantList().map( restaurant =>{
      if(restaurant.id === restaurantId){
       console.log("setting review..")
       review = new Review(rating, reviewMessage);
       restaurant.reviews.push(review);
       
       //After setting the new rating and review, calculate the average rating for that restaurant
       let sumOfRating = 0;
       restaurant.reviews.map( review =>{
        sumOfRating += review.rating;
      })
       
      restaurant.avgrating = (restaurant.avgrating+ sumOfRating)/(restaurant.reviews.length + 1);
      }
   })
  }

   getRestaurantReviewByRestId(restaurantId : number) {
    
    console.log("getting review list")
    let review : Review[] = [];
    this.getAllRestaurantList().map( restaurant =>{
      if(restaurant.id == restaurantId){
         review = restaurant.reviews;
      }
    });

    return review;
  }

}
