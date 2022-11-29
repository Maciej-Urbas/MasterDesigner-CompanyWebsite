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
      if (document.querySelector('.line-up') != null) {
        document.querySelector('.line-up')?.classList.add('line-up-dark');
      }

      if (document.querySelector('.buttonik1') != null) {
        document.querySelector('.buttonik1')?.classList.add('buttonik1-dark');
      }

      if (document.querySelector('.buttonik2') != null) {
        document.querySelector('.buttonik2')?.classList.add('buttonik2-dark');
      }

      const laptop = document.querySelector(
        '.laptop'
      ) as HTMLImageElement | null;
      if (laptop != null) {
        laptop.src = '../../assets/laptop-dark.png';
      }
      const laptopSmall = document.querySelector(
        '.laptop-small'
      ) as HTMLImageElement | null;
      if (laptopSmall != null) {
        laptopSmall.src = '../../assets/laptop-dark.png';
      }
    }
  }
}
