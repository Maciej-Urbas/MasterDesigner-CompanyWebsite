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
    }
  }
}
