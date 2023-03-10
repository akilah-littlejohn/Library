import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryService } from '../library.service';
import { BookDetails } from '../book-details';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  book:any= []

  constructor(public library: LibraryService){
    
  }
ngOnInit(): void {
this.book = this.library.getBook()
}
}
