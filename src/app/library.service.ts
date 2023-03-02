import { Injectable } from '@angular/core';
import { Book } from './book';
import { BookDetails } from './book-details';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  books:Book[] = []

  constructor(public bookType: Book) { }

  addBook(val:BookDetails):void {
    const bookInfo = new Book(val.author, val.title, val.pages)
    this.books.push(bookInfo)
  }

  updateBook() { }

  deleteBook() { }

  clearLibrary() { }
}
