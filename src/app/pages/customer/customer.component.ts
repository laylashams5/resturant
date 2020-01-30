import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { ApiService } from 'src/app/services/api/api.service';
import { LocalStorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  meals: any = [
    {
      id: 1,
      name: 'Biryani',
      image: 'assets/dummy/images/bri.jpg',
      subcategories: [
        {id: 1, name: 'Family', price: 500, tax: 50, disc: 0, quantity: 2 },
        {id: 2, name: 'Plate', price: 300, tax: 50, disc: 0, quantity: 1 },
        {id: 3, name: 'Half Plate', price: 200, tax: 50, disc: 0, quantity: 1 }
      ]
    },
    {
    id: 2,
    name: 'Burger' ,
    image: 'assets/dummy/images/bur.jpg' ,
    subcategories: [
      {id: 1, name: 'Large', price: 100, tax: 20, disc: 0, quantity: 1 },
      {id: 2, name: 'Medium', price: 80, tax: 20, disc: 0, quantity: 1 },
      {id: 3, name: 'Smal', price: 50, tax: 20, disc: 0, quantity: 1 }
    ]
  },
    {
      id: 3,
      name: 'Pizza',
      image: 'assets/dummy/images/piz.jpg',
      tax: 0,
      disc: 0,
      quantity: 1,
      subcategories: []
    },
    {
      id: 4,
      name: 'Dish4',
      image: 'assets/dummy/images/bri.jpg',
      tax: 0,
      disc: 0,
      quantity: 1,
      subcategories: []
    },
    {
      id: 5,
      name: 'Dish5',
      image: 'assets/dummy/images/bri.jpg',
      tax: 0,
      disc: 0,
      quantity: 1,
      subcategories: []
    },
    {
      id: 6,
      name: 'Dish6',
      image: 'assets/dummy/images/bri.jpg',
      tax: 0,
      disc: 0,
      quantity: 1,
      subcategories: []
    },
    {
      id: 7,
      name: 'Dish7',
      image: 'assets/dummy/images/bri.jpg',
      tax: 0,
      disc: 0,
      quantity: 1,
      subcategories: []
    },
  ];

  cart: any  = {
    items: [
      // {id: 1, name: 'Biryani (Family)', quantity: 2 , price: 500, tax: 50, disc: 0},
      // {id: 2, name: 'Burger (Large)', quantity: 1, price: 100, tax: 20, disc: 0 }
    ],
    total: 0
  };
  showcats = false;
  showorders = false;
  mealname: any = {};
  mealid: any = {};
  subcats: any = {};
  constructor(
    public cartservice: CartService,
    private localStorage: LocalStorageService,
    public api: ApiService
    ) {

      // api.getData('getitems').then(data => {this.meals    = data; console.log(this.meals); });
   }

  ngOnInit() {
    const newTodo = 'new todo';
    this.localStorage.storeOnLocalStorage(newTodo);
  }
  addToCart(subcategory) {
    this.showorders = true;
    this.cart.items.push(subcategory);
    console.log(this.cart, 'cart1');
}
  showCats(meal) {
    this.showcats = true;
    this.mealname = meal.name;
    this.mealid = meal.id;
    this.subcats =  meal.subcategories.map(elm => {
       return elm;
    });
  }
  getItemCount() {
    return this.cart.items.reduce((acc, item) => acc + Number( Number(item.quantity)), 0);
  }
  getItemTotalPrice() {
    return this.cart.items.reduce((acc, item) => acc + Number( Number(item.price)) * Number(item.quantity), 0);
  }
  getFinalTAmount() {
    return this.cart.items.reduce((acc, item) => acc + Number( Number(item.price)  *  Number(item.quantity)) + Number(item.tax), 0);
  }
  getTax() {
    return this.cart.items.reduce((acc, item) => acc + Number( Number(item.tax)), 0);
  }
  getDisc() {
    return this.cart.items.reduce((acc, item) => acc + Number( Number(item.disc)), 0);
  }
  increaseCount(item) {
    this.cartservice.increaseCount(item);
  }
  decreaseCount(item) {
      this.cartservice.decreaseCount(item);
  }
  cancelOrder() {
    this.showorders = false;
    this.cart = {
      items: [],
      total: 0
    };
  }
  palceOrder() {
  }
}