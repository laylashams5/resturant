import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart =  {
    items: [],
    total: 0
  };
  // myStorage = window.localStorage;

  constructor(
  ) { }
  /**
   * Calc items total price
   * @param items [{price: any, count: any} ..]
   */
  public exist(item) {
    return this.cart.items.filter(elm => elm.id === item.id).length;
  }
  getCart() {
    return this.cart;
  }
  // increase item count in cart
  increaseCount(item) {
    if (!this.exist(item)) {
      this.cart.items.push(item);
    } else {
      this.cart.items = this.cart.items.map(elm => {
        elm.quantity = Number(elm.quantity);
        if (elm.id === item.id) {
          elm.quantity =  elm.quantity + 1;
        }
        return elm;
      });
    }
  }
  decreaseCount(item) {
    this.cart.items = this.cart.items.map(elm => {
      if (elm.id === item.id) {
          elm.quantity--;
      }
      return elm;
    });
  }
  find(item) {
    return this.cart.items.filter(i => i.id === item.id)[0];
  }
  clear() {
    this.cart = {
      items: [],
      total: 0
    };
  }
  calcTotalPrice(items) {
    return items.reduce((acc, item) => acc + Number( Number(item.price)) * Number(item.count), 0);
  }

  private cartChanged() {
    this.cart.items = this.cart.items.map(item => {
      item.total = item.price * item.count;
      return item;
    });
    this.cart.total = this.calcTotalPrice(this.cart.items);
    // this.storage.set('NG_CART', this.cart);
    // localStorage.setItem('CART', this.cart);
    // this.events.publish('cart:changed', this.cart);
  }

  public addToCart(item: any) {
    if (!this.exist(item)) {
    this.cart.items = this.cart.items.map(elm => {
      if (elm.id === item.id) {
        this.cart.items.push(item);
        console.log(this.cart, 'cart1');
      }
      return this.cart;
    });
    }
    this.cartChanged();
  }
}
