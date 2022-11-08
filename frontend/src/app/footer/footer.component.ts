import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
