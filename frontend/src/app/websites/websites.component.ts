import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css'],
})
export class WebsitesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('themeMode') == 'dark') {
      const a = document.querySelector('.line-up');
      if (a != null) {
        a.classList.add('line-up-dark');
      }

      if (document.querySelector('.blocks_item1') != null) {
        document
          .querySelector('.blocks_item1')
          ?.classList.add('blocks_item-dark');
      }
      if (document.querySelector('.blocks_item2') != null) {
        document
          .querySelector('.blocks_item2')
          ?.classList.add('blocks_item-dark');
      }
      if (document.querySelector('.blocks_item3') != null) {
        document
          .querySelector('.blocks_item3')
          ?.classList.add('blocks_item-dark');
      }
      if (document.querySelector('.blocks_item4') != null) {
        document
          .querySelector('.blocks_item4')
          ?.classList.add('blocks_item-dark');
      }
    }
  }
}
