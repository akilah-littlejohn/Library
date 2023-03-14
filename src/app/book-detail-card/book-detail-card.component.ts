import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-detail-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail-card.component.html',
  styleUrls: ['./book-detail-card.component.scss']
})
export class BookDetailCardComponent implements OnInit {
  books$:any;
constructor(private library:LibraryService){}

ngOnInit(){
  this.books$ = this.library.getBook()
}
}
