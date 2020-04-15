import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-tour',
  template: `
    <h3>little-tour</h3>
    <input
      #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value); newHero.value = ''"
    />

    <button (click)="addHero(newHero.value)">Add</button>
    <ul>
      <li *ngFor="let hero of heroes">{{ hero }}</li>
    </ul>
  `,
  styleUrls: ['./little-tour.component.scss']
})
export class LittleTourComponent {
  heroes = ['fukumura', 'ikuta', 'ishida', 'sato'];

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
