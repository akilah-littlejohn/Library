import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailCardComponent } from './book-detail-card/book-detail-card.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'booklist', component:TableComponent},
  {path:'books/:id', component:BookDetailCardComponent},
  { path: '**', redirectTo: 'booklist' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
