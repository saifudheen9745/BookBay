import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Book } from '../book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: Book[];
  cartTotal:number
  constructor(private cartItems: CartService) {}
  
  ngOnInit(): void {
    this.cartItems.cart.subscribe((data) => {
      this.cartProducts = data;
    });
    this.cartItems.cartTotal.subscribe((data)=>{
      this.cartTotal = data
    })
  }
}
