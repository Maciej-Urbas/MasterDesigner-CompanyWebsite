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

  ngOnInit(): void {}
}
