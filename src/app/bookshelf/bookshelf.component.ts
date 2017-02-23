import { Component, OnInit } from '@angular/core';

import {Book} from "../shared/book";
import {Chapter} from "../shared/chapter";

@Component({
  selector: 'bs-bookshelf',
  templateUrl: './bookshelf.component.html',
  styles: []
})
export class BookshelfComponent implements OnInit {

  private books: Book[] = [
    new Book(
      'Title1',
      'assets/images/metamorphosis.jpg',
      'Author1',
      'Description1',
      [
        new Chapter('title1', ['paragraph1', 'paragraph2']),
        new Chapter('title2', ['paragraph1', 'paragraph2'])
      ]
    ),
    new Book(
      'Title2',
      'assets/images/metamorphosis.jpg',
      'Author2',
      'Description2',
      [
        new Chapter('title1', ['paragraph1', 'paragraph2']),
        new Chapter('title2', ['paragraph1', 'paragraph2'])
      ]
    ),
    new Book(
      'Title2',
      'assets/images/metamorphosis.jpg',
      'Author2',
      'Description2',
      [
        new Chapter('title1', ['paragraph1', 'paragraph2']),
        new Chapter('title2', ['paragraph1', 'paragraph2'])
      ]
    )
  ]

  constructor() { }

  ngOnInit() {
  }

}
