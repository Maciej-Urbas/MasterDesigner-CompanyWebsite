import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css'],
})
export class GraphicsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('themeMode') == 'dark') {
      const a = document.querySelector('.line-up');
      if (a != null) {
        a.classList.add('line-up-dark');
      }

      if (document.querySelector('.blocks_item5') != null) {
        document
          .querySelector('.blocks_item5')
          ?.classList.add('blocks_item-dark');
      }
      if (document.querySelector('.blocks_item6') != null) {
        document
          .querySelector('.blocks_item6')
          ?.classList.add('blocks_item-dark');
      }
      if (document.querySelector('.blocks_item7') != null) {
        document
          .querySelector('.blocks_item7')
          ?.classList.add('blocks_item-dark');
      }
    }
  }
}
