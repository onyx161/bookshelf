import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

import {Book} from "./book";
import {Observable} from "rxjs";
import {AngularFire} from "angularfire2";

@Injectable()
export class BookshelfService {

  private connectionString = 'https://bookshelf-5a065.firebaseio.com/books.json';

  constructor(private af: AngularFire, private http: Http) { }

  getBooks():Observable<Book[]> {
    return this.af.database.list('/books');
  }

}
