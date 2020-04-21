import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-birthday1',
  template: `
    <p>The hero's birthday is {{ birthday | date | uppercase }}</p>
  `,
  styleUrls: ['./hero-birthday1.component.scss']
})
export class HeroBirthday1Component {
  birthday = new Date(1999, 5, 7);
}
