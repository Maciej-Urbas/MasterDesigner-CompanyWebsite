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

      this.addCssClassName('.up_maciek', 'up_maciek-dark');
      this.addCssClassName('.down_daria', 'down_daria-dark');

      // this.addCssClassName('.left', 'left-dark');

      this.addCssClassName('.left-logo', 'left-logo-dark');

      this.addCssClassName(
        '.right-messageForm_small1',
        'right-messageForm_small1-dark'
      );
      this.addCssClassName(
        '.right-messageForm_small2',
        'right-messageForm_small2-dark'
      );
      this.addCssClassName(
        '.right-messageForm_small3',
        'right-messageForm_small3-dark'
      );

      this.addCssClassName(
        '.right-messageForm_large',
        'right-messageForm_large-dark'
      );

      this.addCssClassName(
        '.right-messageForm_submit',
        'right-messageForm_submit-dark'
      );

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

      if (window.innerWidth > 776) {
        this.addCssClassName('.left', 'left-dark-large');
      } else {
        this.addCssClassName('.left', 'left-dark-small');
      }

      this.addCssClassName('.buttonik1', 'buttonik1-dark');
      this.addCssClassName('.buttonik2', 'buttonik2-dark');

      this.addCssClassName('.contact-pair', 'contact-pair-dark');

      this.addCssClassName('.blocks_item1', 'blocks_item-dark');
      this.addCssClassName('.blocks_item2', 'blocks_item-dark');
      this.addCssClassName('.blocks_item3', 'blocks_item-dark');
      this.addCssClassName('.blocks_item4', 'blocks_item-dark');

      this.addCssClassName('.blocks_item5', 'blocks_item-dark');
      this.addCssClassName('.blocks_item6', 'blocks_item-dark');
      this.addCssClassName('.blocks_item7', 'blocks_item-dark');

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

      this.removeCssClassName('.up_maciek', 'up_maciek-dark');
      this.removeCssClassName('.down_daria', 'down_daria-dark');

      // this.removeCssClassName('.left', 'left-dark');

      this.removeCssClassName('.left-logo', 'left-logo-dark');

      this.removeCssClassName(
        '.right-messageForm_small1',
        'right-messageForm_small1-dark'
      );
      this.removeCssClassName(
        '.right-messageForm_small2',
        'right-messageForm_small2-dark'
      );
      this.removeCssClassName(
        '.right-messageForm_small3',
        'right-messageForm_small3-dark'
      );

      this.removeCssClassName(
        '.right-messageForm_large',
        'right-messageForm_large-dark'
      );

      this.removeCssClassName(
        '.right-messageForm_submit',
        'right-messageForm_submit-dark'
      );

      const maciej = document.querySelector(
        '.up_maciek'
      ) as HTMLImageElement | null;
      if (maciej != null) {
        maciej.src = '../../assets/maciek.png';
      }
      const daria = document.querySelector(
        '.down_daria'
      ) as HTMLImageElement | null;
      if (daria != null) {
        daria.src = '../../assets/daria.png';
      }
      const maciejSmall = document.querySelector(
        '.up_maciek-small'
      ) as HTMLImageElement | null;
      if (maciejSmall != null) {
        maciejSmall.src = '../../assets/maciek.png';
      }
      const dariaSmall = document.querySelector(
        '.down_daria-small'
      ) as HTMLImageElement | null;
      if (dariaSmall != null) {
        dariaSmall.src = '../../assets/daria.png';
      }

      const laptop = document.querySelector(
        '.laptop'
      ) as HTMLImageElement | null;
      if (laptop != null) {
        laptop.src = '../../assets/laptop.png';
      }
      const laptopSmall = document.querySelector(
        '.laptop-small'
      ) as HTMLImageElement | null;
      if (laptopSmall != null) {
        laptopSmall.src = '../../assets/laptop.png';
      }

      this.removeCssClassName('.left', 'left-dark-large');
      this.removeCssClassName('.left', 'left-dark-small');

      this.removeCssClassName('.buttonik1', 'buttonik1-dark');
      this.removeCssClassName('.buttonik2', 'buttonik2-dark');

      this.removeCssClassName('.contact-pair', 'contact-pair-dark');

      this.removeCssClassName('.blocks_item1', 'blocks_item-dark');
      this.removeCssClassName('.blocks_item2', 'blocks_item-dark');
      this.removeCssClassName('.blocks_item3', 'blocks_item-dark');
      this.removeCssClassName('.blocks_item4', 'blocks_item-dark');

      this.removeCssClassName('.blocks_item5', 'blocks_item-dark');
      this.removeCssClassName('.blocks_item6', 'blocks_item-dark');
      this.removeCssClassName('.blocks_item7', 'blocks_item-dark');

      localStorage.setItem('themeMode', 'light');
    }
  }

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
