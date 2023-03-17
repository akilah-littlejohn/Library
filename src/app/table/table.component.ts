import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryService } from '../library.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BookDetails } from '../book-details';
import { Observable } from 'rxjs/internal/Observable';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, BookFormComponent],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  booklist$?:Observable<BookDetails[]>

  constructor(public library: LibraryService, private ngbModal:NgbModal){
    
  }
ngOnInit(): void {
this.booklist$ = this.library.getBook()
}
open() {
  const modalRef = this.ngbModal.open(BookFormComponent)
}
}