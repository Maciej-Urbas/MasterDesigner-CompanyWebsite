import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('themeMode') == 'dark') {
      const a = document.querySelector('.line-up');
      if (a != null) {
        a.classList.add('line-up-dark');
      }

      if (document.querySelector('.contact-pair') != null) {
        document
          .querySelector('.contact-pair')
          ?.classList.add('contact-pair-dark');
      }
    }
  }

  scrollToContact() {
    const scrollingHeight = document.querySelector('footer');
    let scrollingHeightValue = 0;

    if (scrollingHeight != undefined) {
      scrollingHeightValue =
        scrollingHeight?.clientHeight + scrollingHeight?.clientHeight;
    }

    if (window.innerWidth > 776) {
      let pomoc = 1920 - window.innerWidth;
      scrollingHeightValue = scrollingHeightValue - 370;
      scrollingHeightValue = scrollingHeightValue + pomoc / 4;

      setTimeout(() => {
        window.scrollTo({
          top: scrollingHeightValue,
          behavior: 'smooth',
        });
      }, 100);
    } else {
      let pomoc = 776 - window.innerWidth;
      scrollingHeightValue = scrollingHeightValue - 1060;
      scrollingHeightValue = scrollingHeightValue + pomoc * 1.4;

      setTimeout(() => {
        window.scrollTo({
          top: scrollingHeightValue,
          behavior: 'smooth',
        });
      }, 100);
    }
  }
}
