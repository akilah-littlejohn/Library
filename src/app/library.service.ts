import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  books:[] = []

  constructor(public bookType:Book) { }

  addBook(){

  }

  updateBook(){
  }

  deleteBook(){}

  clearLibrary(){}
}
