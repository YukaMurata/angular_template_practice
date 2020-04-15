import { Component } from '@angular/core';

@Component({
  selector: 'app-loop-back',
  template: `
    <input #box (keyup)="onKey(box.value)" />
    <p>{{ values }}</p>
    <input #box2 (keyup.enter)="onEnter(box2.value)" />
    <p>{{ value }}</p>
    <input
      #box3
      (keyup.enter)="update(box3.value)"
      (blur)="update(box3.value)"
    />
    <p>{{ value2 }}</p>
  `,
  styleUrls: ['./loop-back.component.scss']
})
export class LoopBackComponent {
  values = '';
  value = '';
  value2 = '';

  onKey(value: string) {
    this.values += value + '|';
  }

  onEnter(value: string) {
    this.value = value;
  }

  update(value: string) {
    this.value2 = value;
  }
}
