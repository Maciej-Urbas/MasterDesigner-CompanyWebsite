import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('themeMode') == 'dark') {
      if (document.querySelector('.right-loginForm_small1') != null) {
        document
          .querySelector('.right-loginForm_small1')
          ?.classList.add('right-loginForm_small1-dark');
      }
      if (document.querySelector('.right-loginForm_small2') != null) {
        document
          .querySelector('.right-loginForm_small2')
          ?.classList.add('right-loginForm_small2-dark');
      }
      if (document.querySelector('.right-loginForm_small3') != null) {
        document
          .querySelector('.right-loginForm_small3')
          ?.classList.add('right-loginForm_small3-dark');
      }

      if (document.querySelector('.right-loginForm_large') != null) {
        document
          .querySelector('.right-loginForm_large')
          ?.classList.add('right-loginForm_large-dark');
      }

      if (document.querySelector('.right-loginForm_submit') != null) {
        document
          .querySelector('.right-loginForm_submit')
          ?.classList.add('right-loginForm_submit-dark');
      }
    }
  }

  loginForm = new FormGroup({
    // login: new FormControl('MD_Maciej'),
    // password: new FormControl('MdMaciej1$%2'),
    login: new FormControl('MD_Daria'),
    password: new FormControl('MdDaria1$%2'),
  });

  async onLogin() {
    let loginFormObj = this.loginForm.getRawValue();

    let serializedLoginFormObj = JSON.stringify(loginFormObj);

    await fetch('http://localhost:5281/api/mdUsers/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: serializedLoginFormObj,
    })
      .then((response) => response.json())
      .then((loginFormObj) => {
        console.log('Success:', loginFormObj);
        serializedLoginFormObj = JSON.stringify(loginFormObj);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    loginFormObj = JSON.parse(serializedLoginFormObj);
    if (loginFormObj.token != undefined) {
      localStorage.setItem('token', loginFormObj.token);
      window.location.href = 'http://localhost:4200/login/messages';
    }
  }
}
