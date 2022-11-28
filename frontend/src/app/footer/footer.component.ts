import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('themeMode') == 'dark') {
      if (document.querySelector('.left') != null) {
        if (window.innerWidth > 776) {
          document.querySelector('.left')?.classList.add('left-dark-large');
        } else {
          document.querySelector('.left')?.classList.add('left-dark-small');
        }
      }

      if (document.querySelector('.left-logo') != null) {
        document.querySelector('.left-logo')?.classList.add('left-logo-dark');
      }

      if (document.querySelector('.right-messageForm_small1') != null) {
        document
          .querySelector('.right-messageForm_small1')
          ?.classList.add('right-messageForm_small1-dark');
      }
      if (document.querySelector('.right-messageForm_small2') != null) {
        document
          .querySelector('.right-messageForm_small2')
          ?.classList.add('right-messageForm_small2-dark');
      }
      if (document.querySelector('.right-messageForm_small3') != null) {
        document
          .querySelector('.right-messageForm_small3')
          ?.classList.add('right-messageForm_small3-dark');
      }

      if (document.querySelector('.right-messageForm_large') != null) {
        document
          .querySelector('.right-messageForm_large')
          ?.classList.add('right-messageForm_large-dark');
      }

      if (document.querySelector('.right-messageForm_submit') != null) {
        document
          .querySelector('.right-messageForm_submit')
          ?.classList.add('right-messageForm_submit-dark');
      }
    }
  }

  messageForm = new FormGroup({
    topic: new FormControl('Temat'),
    phone: new FormControl('Numer telefonu'),
    email: new FormControl('Adres e-mail'),
    message: new FormControl('Wiadomość'),
  });

  onSubmit() {
    console.log('asd');
  }
}
