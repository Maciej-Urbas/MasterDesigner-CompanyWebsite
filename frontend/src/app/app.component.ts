import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    let navlogoHeightValue;

    const navlogoHeight = document.querySelector('.nav-logo');
    navlogoHeightValue = navlogoHeight?.clientHeight;

    // console.log(navlogoHeightValue);

    if (navlogoHeightValue != undefined) {
      console.log(navlogoHeightValue);
      if (window.scrollY >= navlogoHeightValue - 10) {
        document
          .querySelector('.scroll-to-top_button')
          ?.classList.add('show-scroll-to-top_button');
      } else {
        document
          .querySelector('.scroll-to-top_button')
          ?.classList.remove('show-scroll-to-top_button');
      }
    }
    // return 0;
  }

  scrollTop() {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 100);
  }
}
