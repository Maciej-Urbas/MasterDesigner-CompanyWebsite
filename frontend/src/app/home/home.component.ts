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

      if (document.querySelector('.up_maciek') != null) {
        document.querySelector('.up_maciek')?.classList.add('up_maciek-dark');
      }
      if (document.querySelector('.down_daria') != null) {
        document.querySelector('.down_daria')?.classList.add('down_daria-dark');
      }

      const maciej = document.querySelector(
        '.up_maciek'
      ) as HTMLImageElement | null;
      if (maciej != null) {
        maciej.src = '../../assets/maciek-dark.png';
      }
      const daria = document.querySelector(
        '.down_daria'
      ) as HTMLImageElement | null;
      if (daria != null) {
        daria.src = '../../assets/daria-dark.png';
      }
      const maciejSmall = document.querySelector(
        '.up_maciek-small'
      ) as HTMLImageElement | null;
      if (maciejSmall != null) {
        maciejSmall.src = '../../assets/maciek-dark.png';
      }
      const dariaSmall = document.querySelector(
        '.down_daria-small'
      ) as HTMLImageElement | null;
      if (dariaSmall != null) {
        dariaSmall.src = '../../assets/daria-dark.png';
      }
    }
  }
}
