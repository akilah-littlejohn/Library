import { Injectable } from '@angular/core';
import { Book } from './book';
import { BookDetails } from './book-details';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  books: Book[] = []
  booksId: number = 0

  constructor(public bookType: Book) { }

  addBook(val: BookDetails): void {
    val.id = this.booksId++
    const bookInfo = new Book(val.id, val.author, val.title, val.pages)
    this.books.push(bookInfo)
  }

  deleteBook(val: BookDetails) {
    const index = this.books.findIndex(b => b.id === val.id);
    if (index !== -1) {
      this.books.splice(index, 1)
    }
  }
  updateBook(val: BookDetails) {

    const index = this.books.findIndex(b => b.id === val.id);
    if (index !== -1) {
      this.books[index] = val;

    }

  }

 
}
