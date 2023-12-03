import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.bookForm = this.formBuilder.group({
      isbn: [''],
      title: [''],
      author: [''],
      description: [''],
      published_year: [''],
      publisher: ['']
    })
  }
  ngOnInit(): void { }
  onSubmit(): void {
    this.crudService.EditBook(this.bookForm.value).subscribe (
      () => {
        console.log('Book added succesfully.');
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'));
      },
      (error) => {
        console.error('Error editing book:', error);
      });
  }
}