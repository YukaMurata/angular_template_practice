import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <h2>My favorite hero is {{ myHero.name }}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">{{ hero.name }}</li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    <app-sizer
      [size]="fontSizePx"
      (sizeChange)="fontSizePx = $event"
    ></app-sizer>
    <div [style.font-size.px]="fontSizePx">Resizable Text</div>
    <app-click-me></app-click-me>
    <app-keyup></app-keyup>
    <app-loop-back></app-loop-back>
    <app-little-tour></app-little-tour>
    <app-hero-parent [heroes]="heroes"></app-hero-parent>
  `
})
export class AppComponent {
  title = 'angular-template-practice';
  heroes = [
    new Hero(1, 'fukumura'),
    new Hero(2, 'ikuta'),
    new Hero(3, 'ishida'),
    new Hero(4, 'sato')
  ];
  myHero = this.heroes[2];
  fontSizePx = 16;
}
