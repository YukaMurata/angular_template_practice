import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-birthday2',
  template: `
    <p>The hero's birthday is {{ birthday | date: format }}</p>
    <button (click)="toggleFormat()">Toggle Format</button>
  `,
  styleUrls: ['./hero-birthday2.component.scss']
})
export class HeroBirthday2Component {
  birthday: Date = new Date(1999, 5, 7);
  toggle: boolean = true;

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }
}
