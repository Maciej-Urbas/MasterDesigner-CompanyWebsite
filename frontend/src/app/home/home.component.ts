import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('themeMode') == 'dark') {
      if (document.querySelector('.line-up') != null) {
        document.querySelector('.line-up')?.classList.add('line-up-dark');
      }

      if (document.querySelector('.frame') != null) {
        document.querySelector('.frame')?.classList.add('frame-dark');
      }
    }
  }
}
