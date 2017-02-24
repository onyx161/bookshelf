import {Routes, RouterModule} from "@angular/router";

import {BookshelfComponent} from "./bookshelf/bookshelf.component";
import {BookComponent} from "./book/book.component";

const AppRoutes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BookshelfComponent },
  { path: 'books/:id', component: BookComponent }
]

export const routing = RouterModule.forRoot(AppRoutes);
