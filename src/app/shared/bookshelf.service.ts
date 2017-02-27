import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { Book } from './book';

@Injectable()
export class BookshelfService {

  constructor(private af: AngularFire, private http: Http) { }

  getBooks(): Observable<Book[]> {
    return this.af.database.list('/books');
  }

}
