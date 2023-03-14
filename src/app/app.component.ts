import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookDetailCardComponent } from './book-detail-card/book-detail-card.component';
import { BookFormComponent } from './book-form/book-form.component';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
  imports:[TableComponent, BookFormComponent ,BookDetailCardComponent,CommonModule]
})
export class AppComponent {
  title = 'book-list';
}
