//Restaurant class holds all the details that a restaurant should have
//Here, price is the average price of all the food in this restaurant, similary for rating
export class Restaurant{
    id!: number;
    name!:string;
    price!:number;
    favourite:boolean = false;
    numberOfRaters!:number;
    avgrating!:number;
    reviews!:Review[];
    image!:string;
    deliveryTime!:string;
    cuisines!:string[];
    address!:string;
    contact!:string;
    menu!:Food[];
}

//This Food is the type restaurant menu
export class Food {
    id!: number;
    name!:string;
    price!:number;
    rating:number = 0;
    image!:string;
    detail!:string;
}
export class Review {
    rating : number = 0;
    review : string = '';

    constructor(rating: number, review : string){
        this.rating = rating;
        this.review = review;
    }
}