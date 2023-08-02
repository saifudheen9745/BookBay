import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book.service';
import { SweetAlertsService } from './sweet-alerts.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<Book[]>([]);
  cartTotal = new BehaviorSubject<number>(0);
  constructor(private sweetAlert:SweetAlertsService) {}

  //To add products to the cart
  addToCart(product: Book) {
    product.quantity = 1;
    const currentCart = this.cart.getValue();
    
    if (product?.title) {
      let duplicateIndex = currentCart.findIndex(
        (item) => product?.title === item?.title
      );
      if (duplicateIndex < 0) {
        currentCart.push(product);
      } else {
        const existingProduct = currentCart[duplicateIndex];
        if (existingProduct.quantity) {
          existingProduct.quantity += 1;
        }
      }
      this.cartTotal.next(
        this.cartTotal.getValue() + parseInt(product.price.split('$')[1])
      );
      this.cart.next(currentCart);
    }
  }

  //For removing products from the cart
  async removeFromCart(product: Book) {
    if (await this.sweetAlert.confirmDelete()) {
      const qty: number = product.quantity as number;
      const priceToReduce: number = parseInt(product.price.split('$')[1]) * qty;
      let currentCart = this.cart.getValue();
      let filteredCart = currentCart.filter(
        (item) => item.title !== product.title
      );
      this.cart.next(filteredCart);
      this.cartTotal.next(this.cartTotal.getValue() - priceToReduce);
    } else {
      return;
    }
  }

  //For updating the quantity of the products in the cart
  async updateQuantity(product: Book, qty: number) {
    let currentCart = this.cart.getValue();
    if (product?.title) {
      let duplicateIndex = currentCart.findIndex(
        (item) => product?.title === item?.title
      );
      const existingProduct = currentCart[duplicateIndex];
      if (existingProduct.quantity === 1 && qty === -1) {
        this.removeFromCart(product);
        return;
      }
      if (existingProduct.quantity) {
        existingProduct.quantity += qty;
      }
      if (qty === -1) {
        this.cartTotal.next(
          this.cartTotal.getValue() - parseInt(product.price.split('$')[1])
        );
      }else{
        this.cartTotal.next(
          this.cartTotal.getValue() + parseInt(product.price.split('$')[1])
        );
      }
      this.cart.next(currentCart);
    }
  }
}
