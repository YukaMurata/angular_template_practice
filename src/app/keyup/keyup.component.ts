import { Component } from '@angular/core';

@Component({
  selector: 'app-keyup',
  template: `
    <input (keyup)="onKey($event)" />
    <p>{{ values }}</p>
  `,
  styleUrls: ['./keyup.component.scss']
})
export class KeyupComponent {
  values = '';

  onKey(event: any) {
    // this.values += event.target.value + '|';
    this.values += (event.target as HTMLInputElement).value + '|';
  }
}
