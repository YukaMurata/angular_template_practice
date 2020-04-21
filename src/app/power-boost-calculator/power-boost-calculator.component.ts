import { Component } from '@angular/core';

@Component({
  selector: 'app-power-boost-calculator',
  template: `
    <h2>Power Boost Calculator</h2>
    <div>Normal power: <input [(ngModel)]="power" /></div>
    <div>Boost factor: <input [(ngModel)]="factor" /></div>
    <p>Super Hero Power: {{ power | exponentialStrength: factor }}</p>
  `,
  styleUrls: ['./power-boost-calculator.component.scss']
})
export class PowerBoostCalculatorComponent {
  power: number = 5;
  factor: number = 1;
}
