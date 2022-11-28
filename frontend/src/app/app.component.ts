import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  key = 'themeMode';

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

  ngOnInit(): void {
    const r = document.querySelector(':root');
    const switchCheckbox = document.querySelector(
      '.nav-content-switch_checkbox'
    ) as HTMLInputElement | null;

    // console.log(switchCheckbox?.ariaChecked);
    // switchCheckbox.checked = 'checked';
    if (localStorage.getItem('themeMode') == 'dark') {
      console.log('darkMode');

      if (switchCheckbox != null) {
        switchCheckbox.checked = true;
      }

      this.addCssClassName('.line-up', 'line-up-dark');

      // this.swapCssProperty(
      //   '--lightBackgroundOne',
      //   this.getCssPropertyValue('--darkBackgroundOne')
      // );
      // this.swapCssProperty(
      //   '--lightBackgroundTwo',
      //   this.getCssPropertyValue('--darkBackgroundTwo')
      // );

      // this.swapCssProperty(
      //   '--lightTextColor',
      //   this.getCssPropertyValue('--blackTextColor')
      // );

      // this.swapCssProperty(
      //   '--lightSwitchBulb',
      //   this.getCssPropertyValue('--darkSwitchBulb')
      // );

      // this.swapCssProperty(
      //   '--lightNavLogo',
      //   this.getCssPropertyValue('--darkNavLogo')
      // );

      // this.swapCssProperty(
      //   '--lightNavMenuButton',
      //   this.getCssPropertyValue('--darkNavMenuButton')
      // );
    } else {
      console.log('lightMode');

      if (switchCheckbox != null) {
        switchCheckbox.checked = false;
      }

      // this.removeCssClassName('.app', 'app-dark');

      // this.swapCssProperty(
      //   '--darkBackgroundOne',
      //   this.getCssPropertyValue('--lightBackgroundOne')
      // );
      // this.swapCssProperty(
      //   '--darkBackgroundTwo',
      //   this.getCssPropertyValue('--lightBackgroundTwo')
      // );

      // this.swapCssProperty(
      //   '--blackTextColor',
      //   this.getCssPropertyValue('--lightTextColor')
      // );

      // this.swapCssProperty(
      //   '--darkSwitchBulb',
      //   this.getCssPropertyValue('--lightSwitchBulb')
      // );

      // this.swapCssProperty(
      //   '--darkNavLogo',
      //   this.getCssPropertyValue('--lightNavLogo')
      // );

      // this.swapCssProperty(
      //   '--darkNavMenuButton',
      //   this.getCssPropertyValue('--lightNavMenuButton')
      // );
    }
  }

  // changeSiteDisplayTheme() {
  //   const r = document.querySelector(':root');
  //   const switchCheckbox = document.querySelector(
  //     '.nav-content-switch_checkbox'
  //   ) as HTMLInputElement | null;

  //   // console.log(switchCheckbox?.ariaChecked);
  //   // switchCheckbox.checked = 'checked';

  //   if (localStorage.getItem('themeMode') == 'dark') {
  //     console.log('darkMode');

  //     if (switchCheckbox != null) {
  //       switchCheckbox.checked = true;
  //     }

  //     this.swapCssProperty(
  //       '--lightBackgroundOne',
  //       this.getCssPropertyValue('--darkBackgroundOne')
  //     );
  //     this.swapCssProperty(
  //       '--lightBackgroundTwo',
  //       this.getCssPropertyValue('--darkBackgroundTwo')
  //     );

  //     this.swapCssProperty(
  //       '--lightTextColor',
  //       this.getCssPropertyValue('--blackTextColor')
  //     );
  //   } else {
  //     console.log('lightMode');

  //     if (switchCheckbox != null) {
  //       switchCheckbox.checked = false;
  //     }

  //     this.swapCssProperty(
  //       '--darkBackgroundOne',
  //       this.getCssPropertyValue('--lightBackgroundOne')
  //     );
  //     this.swapCssProperty(
  //       '--darkBackgroundTwo',
  //       this.getCssPropertyValue('--lightBackgroundTwo')
  //     );

  //     this.swapCssProperty(
  //       '--blackTextColor',
  //       this.getCssPropertyValue('--lightTextColor')
  //     );
  //   }
  // }

  // getCssPropertyValue(cssPropertyName: string) {
  //   const r = document.querySelector(':root');

  //   if (r != undefined) {
  //     const rs = getComputedStyle(r);

  //     return rs.getPropertyValue(cssPropertyName);
  //   } else {
  //     return '0';
  //   }
  // }

  // swapCssProperty(actualCssPropertyName: string, newCssPropertyName: string) {
  //   const r = document.querySelector(':root');

  //   if (r != undefined) {
  //     const rs = getComputedStyle(r);

  //     document.documentElement.style.setProperty(
  //       actualCssPropertyName,
  //       newCssPropertyName
  //     );
  //   }
  // }

  addCssClassName(cssClassName: string, addedClassName: string) {
    if (document.querySelector(cssClassName) != null) {
      document.querySelector(cssClassName)?.classList.add(addedClassName);
    }
  }

  // removeCssClassName(cssClassName: string, addedClassName: string) {
  //   if (document.querySelector(cssClassName) != null) {
  //     document.querySelector(cssClassName)?.classList.remove(addedClassName);
  //   }
  // }
}
