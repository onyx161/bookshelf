import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BookshelfService } from "./shared/bookshelf.service";

export const firebaseConfig = {
  apiKey: "AIzaSyCQybCZoCID_mOJ1LMC-GSAPmVjP4dpnMo",
  authDomain: "bookshelf-5a065.firebaseapp.com",
  databaseURL: "https://bookshelf-5a065.firebaseio.com",
  storageBucket: "bookshelf-5a065.appspot.com",
  messagingSenderId: "571729145068"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookshelfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [BookshelfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
