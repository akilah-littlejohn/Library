import { Injectable } from '@angular/core';
import { BookDetails } from './book-details';

import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  api: string = 'http://localhost:3000/books';


  constructor(private http: HttpClient) { }

  getBook() {
    return this.http.get<BookDetails[]>(this.api)
  }

  addBook(book: BookDetails): void {

    this.http.post<BookDetails>(this.api, book)
  }


  deleteBook(book: BookDetails) {
    const url = `${this.api}/${book.id}`;

    this.http.delete<BookDetails>(url)

  }
  updateBook(book: BookDetails) {

    const url = `${this.api}/${book.id}`;
    return this.http.put<BookDetails>(url, book)
  }


}


