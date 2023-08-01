import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Book } from '../book.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartItemCount:number
  constructor(private cartService:CartService){
    this.cartService.cart.subscribe((cartItems)=>{
      this.cartItemCount = cartItems.length
    })
  }
  
}
