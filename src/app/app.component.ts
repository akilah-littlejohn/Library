import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
  imports:[TableComponent, CommonModule]
})
export class AppComponent {
  title = 'book-list';
}
