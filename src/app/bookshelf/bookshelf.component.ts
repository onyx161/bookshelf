import { Component, OnInit } from '@angular/core';

import {Book} from "../shared/book";
import {BookshelfService} from "../shared/bookshelf.service";

@Component({
  selector: 'bs-bookshelf',
  templateUrl: './bookshelf.component.html',
  styles: []
})
export class BookshelfComponent implements OnInit {

  books;

  constructor(private bookshelfService: BookshelfService) { }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.books = this.bookshelfService.getBooks();
  }

}
