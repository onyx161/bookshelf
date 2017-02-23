import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

import {Book} from "./book";
import {Observable} from "rxjs";

@Injectable()
export class BookshelfService {

  private connectionString = 'https://bookshelf-5a065.firebaseio.com/books.json';

  constructor(private http: Http) { }

  getBooks():Observable<Book[]> {
    return this.http
      .get(this.connectionString)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    // https://angular.io/docs/ts/latest/guide/server-communication.html
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
