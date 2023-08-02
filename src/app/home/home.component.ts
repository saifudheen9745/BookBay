import { Component, OnInit } from '@angular/core';
import { Book, BookService } from '../book.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  tempArray: number[] = Array(20).fill(0);
  allBooks: Book[] = [];
  constructor(private api: BookService, private cartApi: CartService) {
   
  }

  ngOnInit(): void {
    this.api.getAllBooks().subscribe((data: Book[]) => {
      this.allBooks = data;
    });
  }

  addToCart = (data: Book) => {
    this.cartApi.addToCart(data);
  };
  
}
