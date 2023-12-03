import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  Books: any = [];

  constructor(private crudService: CrudService) { }

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
      })
    location.reload();
  }
  onEdit(id: any): any {
    this.crudService.EditBook(id)
      .subscribe(res => {
        console.log(res)
      })
    location.reload();
  }
}
