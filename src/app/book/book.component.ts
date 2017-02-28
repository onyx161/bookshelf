import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { BookshelfService } from './../shared/bookshelf.service';

@Component({
  selector: 'bs-book',
  templateUrl: './book.component.html',
  styles: []
})
export class BookComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private bookId: string;
  book;

  constructor(
    private bss: BookshelfService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.bookId = params['id'];
        this.book = this.bss.getBook(this.bookId);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
