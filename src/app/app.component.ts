import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-root',
  template: `
    <!-- <h1>{{ title }}</h1>
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

    <app-votetaker></app-votetaker>
    <app-countdown-parent></app-countdown-parent>
    <app-missioncontrol></app-missioncontrol> -->

    <!-- <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div> -->
    <h1>Color</h1>
    <h4>Pick a highlight color</h4>
    <div>
      <input type="radio" name="colors" (click)="color = '#E30F66'" /> FUKUMURA
      <input type="radio" name="colors" (click)="color = '#B6D00F'" /> IKUTA
      <input type="radio" name="colors" (click)="color = '#2667B4'" /> ISHIDA
      <input type="radio" name="colors" (click)="color = '#47B0A0'" /> SATO
      <input type="radio" name="colors" (click)="color = '#9077B4'" /> ODA
      <input type="radio" name="colors" (click)="color = '#7D318C'" /> NONAKA
      <input type="radio" name="colors" (click)="color = '#EA708C'" /> MAKINO
      <input type="radio" name="colors" (click)="color = '#EB760C'" /> HAGA
      <input type="radio" name="colors" (click)="color = '#E4073A'" /> KAGA
      <input type="radio" name="colors" (click)="color = '#f9CF14'" /> YOKOYAMA
      <input type="radio" name="colors" (click)="color = '#C9C9C9'" /> MORITO
      <input type="radio" name="colors" (click)="color = '#58B5CE'" /> KITAGAWA
      <input type="radio" name="colors" (click)="color = '#FBE121'" /> OKAMURA
      <input type="radio" name="colors" (click)="color = '#46AE34'" /> YAMAZAKI
    </div>

    <p [appHighlight]="color" defaultColor="yellow">Highlight me!</p>

    <app-hero-birthday1></app-hero-birthday1>
    <app-hero-birthday2></app-hero-birthday2>

    <app-power-booster></app-power-booster>
    <app-power-boost-calculator></app-power-boost-calculator>
    <app-flying-heroes></app-flying-heroes>
  `
})
export class AppComponent implements OnInit {
  title = 'angular-template-practice';
  heroes = [
    new Hero(1, 'fukumura'),
    new Hero(2, 'ikuta'),
    new Hero(3, 'ishida'),
    new Hero(4, 'sato')
  ];
  myHero = this.heroes[2];
  fontSizePx = 16;

  ads: AdItem[];

  color: string;

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
