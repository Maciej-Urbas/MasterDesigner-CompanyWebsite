import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  isExpanded = false;
  isExpanded2 = false;

  isChecked = 0;
  darkTheme = false;

  collapse() {
    this.isExpanded = false;
  }
  collapse2() {
    this.isExpanded2 = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  toggle2() {
    this.isExpanded2 = !this.isExpanded2;
  }

  resetThemeStyle() {
    this.darkTheme = false;
  }
  changeThemeStyle() {
    this.darkTheme = !this.darkTheme;
  }

  addCssClassName(cssClassName: string, addedClassName: string) {
    if (document.querySelector(cssClassName) != null) {
      document.querySelector(cssClassName)?.classList.add(addedClassName);
    }
  }

  removeCssClassName(cssClassName: string, addedClassName: string) {
    if (document.querySelector(cssClassName) != null) {
      document.querySelector(cssClassName)?.classList.remove(addedClassName);
    }
  }

  setKeyValueOfLocalStorage() {
    const switchCheckbox = document.querySelector(
      '.nav-content-switch_checkbox'
    ) as HTMLInputElement | null;

    if (switchCheckbox != null) {
      if (switchCheckbox.checked) {
        this.isChecked = 0;
      } else {
        this.isChecked = 1;
      }
    }

    if (this.isChecked == 0) {
      this.isChecked = 1;

      this.changeThemeStyle();

      this.addCssClassName('.line', 'line-dark');
      this.addCssClassName('.line-up', 'line-up-dark');

      this.addCssClassName('.app', 'app-dark');
      this.addCssClassName(
        '.scroll-to-top_button',
        'scroll-to-top_button-dark'
      );

      this.addCssClassName(
        '.nav-content-button_button',
        'nav-content-button_button-dark'
      );

      this.addCssClassName(
        '.nav-content-switch-bulb',
        'nav-content-switch-bulb-dark'
      );

      this.addCssClassName('.frame', 'frame-dark');

      localStorage.setItem('themeMode', 'dark');
    } else {
      this.isChecked = 0;

      this.resetThemeStyle();

      this.removeCssClassName('.line', 'line-dark');
      this.removeCssClassName('.line-up', 'line-up-dark');

      this.removeCssClassName('.app', 'app-dark');
      this.removeCssClassName(
        '.scroll-to-top_button',
        'scroll-to-top_button-dark'
      );

      this.removeCssClassName(
        '.nav-content-button_button',
        'nav-content-button_button-dark'
      );

      this.removeCssClassName(
        '.nav-content-switch-bulb',
        'nav-content-switch-bulb-dark'
      );

      this.removeCssClassName('.frame', 'frame-dark');

      localStorage.setItem('themeMode', 'light');
    }
  }

  // goToKontakt() {
  //   this.toggle();

  //   const footerMessageForm =
  //     document.getElementsByClassName('right-messageForm');
  //   let ss = footerMessageForm[0].getBoundingClientRect().top;

  //   setTimeout(() => {
  //     window.scroll({
  //       top: ss,
  //       left: 0,
  //       behavior: 'smooth',
  //     });
  //   }, 400);
  // }

  ngOnInit(): void {
    if (localStorage.getItem('themeMode') == 'light') {
      this.darkTheme = false;

      this.removeCssClassName('.line', 'line-dark');

      this.removeCssClassName('.app', 'app-dark');
      this.removeCssClassName(
        '.scroll-to-top_button',
        'scroll-to-top_button-dark'
      );

      this.removeCssClassName(
        '.nav-content-button_button',
        'nav-content-button_button-dark'
      );

      this.removeCssClassName(
        '.nav-content-switch-bulb',
        'nav-content-switch-bulb-dark'
      );
    } else {
      this.darkTheme = true;

      this.addCssClassName('.line', 'line-dark');

      this.addCssClassName('.app', 'app-dark');
      this.addCssClassName(
        '.scroll-to-top_button',
        'scroll-to-top_button-dark'
      );

      this.addCssClassName(
        '.nav-content-button_button',
        'nav-content-button_button-dark'
      );

      this.addCssClassName(
        '.nav-content-switch-bulb',
        'nav-content-switch-bulb-dark'
      );
    }
  }
}
