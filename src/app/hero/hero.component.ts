import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <p>
      hero works!
    </p>
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  text: string;

  constructor() {
    this.text = 'hungry';
  }

  ngOnInit(): void {}
}
