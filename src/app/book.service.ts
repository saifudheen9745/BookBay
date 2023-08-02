import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { bookUrl } from 'src/constants';

export type Book = {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
  quantity?:number
};

export type BookObj = {
  books: Book[];
  error: string;
  total: string;
};

@Injectable({
  providedIn: 'root',
})
export class BookService {
  
  constructor(private api: HttpClient) {}

  //To get the list of books from the api on startup
  getAllBooks = (): Observable<Book[]> => {
    return this.api.get<BookObj>('https://api.itbook.store/1.0/new').pipe(
      map((data: BookObj) => {
        return data.books;
      }),
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  };
}
