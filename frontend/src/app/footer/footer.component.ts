import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ipAddress = '';

  ngOnInit(): void {
    this.getIPAddress();

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
    name: new FormControl('Imie'),
    topic: new FormControl('Temat'),
    email: new FormControl('Adres e-mail'),
    content: new FormControl('Wiadomość'),
    ipAddress: new FormControl(''),
    state: new FormControl(),
  });

  getIPAddress() {
    this.httpClient.get('https://jsonip.com').subscribe(
      (value: any) => {
        // console.log(value);
        this.ipAddress = value.ip;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.messageForm.controls.ipAddress.setValue(this.ipAddress);
    this.messageForm.controls.state.setValue(0);
    let messageFormObj = this.messageForm.getRawValue();

    // Zmiana danych w obiekt JSON
    let serializedMessageFormObj = JSON.stringify(messageFormObj);
    alert(serializedMessageFormObj);

    fetch('http://localhost:5281/api/mdMessages', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: serializedMessageFormObj,
    })
      .then((response) => response.json())
      .then((messageFormObj) => {
        console.log('Success:', messageFormObj);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
