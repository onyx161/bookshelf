import { Component, OnInit } from '@angular/core';

import {Book} from "../shared/book";
import {BookshelfService} from "../shared/bookshelf.service";

@Component({
  selector: 'bs-bookshelf',
  templateUrl: './bookshelf.component.html',
  styles: []
})
export class BookshelfComponent implements OnInit {

  books: Book[];

  constructor(private bookshelfService: BookshelfService) { }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookshelfService.getBooks().subscribe((data: Book[]) => this.books = data);
  }

}
