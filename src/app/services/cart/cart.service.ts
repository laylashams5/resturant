import { LocalStorageService } from 'src/app/services/storage/storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart =  {
    items: [],
    total: 0
  };
  showorders = false;
  events: any;
  constructor(
    public storage: LocalStorageService) { }
  /**
   * Calc items total price
   * @param items [{price: any, count: any} ..]
   */
  calcTotalPrice(items) {
    return     this.cart.total = this.cart.items.reduce((acc, item) =>
    acc + Number( Number(item.price)  *  Number(item.quantity)) + Number(item.tax), 0);
  }
  public exist(item) {
    return this.cart.items.filter(elm => elm.id === item.id).length;
  }
   cartChanged() {
    this.cart.items = this.cart.items.map(item => {
      item.total = item.price * item.count;
      return item;
    });
    this.cart.total = this.calcTotalPrice(this.cart.items);
    this.storage.set('cart', this.cart);
  }
  getCart() {
    // this.cart.items = this.storage.get('cart');
    return this.cart;
  }
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
  addToCart(item) {
    this.showorders =  true;
    // tslint:disable-next-line:no-shadowed-variable
    this.cart.items = this.cart.items.map(item => {
      item.total = item.price * item.quantity;
      return item;
    });
    this.cart.items.push(item);
    this.cartChanged();
}
}
