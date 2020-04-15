import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  template: `
    <button (click)="onClickMe()">Click me!</button>
    {{ clickMessage }}
  `,
  styleUrls: ['./click-me.component.scss']
})
export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
