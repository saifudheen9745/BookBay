import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: Book;
  @Output() addToCartButton = new EventEmitter<Book>();
  constructor() {}

  buttonClick = (book:Book) =>{
    this.addToCartButton.emit(book)
  }

  
}
