import { Component } from '@angular/core';
import { Book, BookService } from '../book.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allBooks: Book[] = [];
  constructor(private api: BookService, private cartApi:CartService) {
    this.api.getAllBooks().subscribe((data: Book[]) => {
      this.allBooks = data;
    });
  }

  addToCart = (data:Book)=>{
    this.cartApi.addToCart(data)
  }
}
