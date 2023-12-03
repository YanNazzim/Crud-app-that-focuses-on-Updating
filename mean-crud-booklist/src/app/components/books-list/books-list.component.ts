import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  Books: any = [];

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.crudService.GetBooks().subscribe(res => {
      console.log(res)
      this.Books = res;
    });
  }
  onDelete(id: any): any {
    this.crudService.DeleteBook(id)
      .subscribe(res => {
        console.log(res)
        this.Books = this.Books.filter((book: any) => book._id !== id)
      })
      location.reload();
  }
  onEdit(id: any): void {
    this.router.navigate(['/edit-book', id]);
  }
}
