import { Injectable } from '@angular/core';
import { BookDetails } from './book-details';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  api: string = 'http://localhost:3000/books'
  booksId: number = 0

  constructor( private http: HttpClient) { }

  getBook() {
    return this.http.get<BookDetails[]>(this.api)
   }

  addBook(val: BookDetails): void {
  }

  deleteBook(val: BookDetails) {

  }
  updateBook(val: BookDetails) {

  }


}


