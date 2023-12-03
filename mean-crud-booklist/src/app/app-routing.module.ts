import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books-list' },
  { path: 'books-list', component: BooksListComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: '', pathMatch: 'full', redirectTo: 'delete-book/:id' },
  { path: '', pathMatch: 'full', redirectTo: 'edit-book/:id' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
