import { Component, Input } from '@angular/core';
import { Book } from '../book.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent {
  @Input() cartItem: Book;
  quantity:number
  constructor(private cartApi: CartService) {
  }

  customQty = (book:Book)=>{
    if(this.quantity > 0){
      this.cartApi.updateQuantity(book, this.quantity, true);
    }
  }

  deteleCartItem = (book: Book) => {
    this.cartApi.removeFromCart(book);
  };

  incrementQty = (book: Book) => {
    this.cartApi.updateQuantity(book, 1);
  };

  decrementQty = (book: Book) => {
    this.cartApi.updateQuantity(book, -1);
  };
}
