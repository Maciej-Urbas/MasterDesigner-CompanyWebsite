import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MasterDesigner';

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    let navlogoHeightValue;

    const navlogoHeight = document.querySelector('.nav-logo');
    navlogoHeightValue = navlogoHeight?.clientHeight;

    if (navlogoHeightValue != undefined) {
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
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (localStorage.getItem('themeMode') == 'dark') {
      if (document.querySelector('.left') != null) {
        if (window.innerWidth > 776) {
          document.querySelector('.left')?.classList.remove('left-dark-small');
          document.querySelector('.left')?.classList.add('left-dark-large');
        } else {
          document.querySelector('.left')?.classList.remove('left-dark-large');
          document.querySelector('.left')?.classList.add('left-dark-small');
        }
      }
    }
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

  ngOnInit(): void {
    if (localStorage.getItem('themeMode') == null) {
      localStorage.setItem('themeMode', 'light');
    }
    if (localStorage.getItem('token') == null) {
      localStorage.setItem('token', 'aaaa');
    }

    const switchCheckbox = document.querySelector(
      '.nav-content-switch_checkbox'
    ) as HTMLInputElement | null;

    if (localStorage.getItem('themeMode') == 'dark') {
      if (switchCheckbox != null) {
        switchCheckbox.checked = true;
      }

      this.addCssClassName('.line-up', 'line-up-dark');
    } else {
      if (switchCheckbox != null) {
        switchCheckbox.checked = false;
      }
    }
  }

  addCssClassName(cssClassName: string, addedClassName: string) {
    if (document.querySelector(cssClassName) != null) {
      document.querySelector(cssClassName)?.classList.add(addedClassName);
    }
  }
}
