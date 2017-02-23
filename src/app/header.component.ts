import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-header',
  template: `
    <div class="header">
      <div class="container">
        Bookshelf
      </div>
    </div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
