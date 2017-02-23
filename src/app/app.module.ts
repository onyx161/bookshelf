import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BookshelfService } from "./shared/bookshelf.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookshelfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookshelfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
