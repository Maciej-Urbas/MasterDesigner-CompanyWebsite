import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent implements OnInit {
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
