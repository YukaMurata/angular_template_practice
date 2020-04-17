import { Component } from '@angular/core';

import { MissionService } from '../mission.service';

@Component({
  selector: 'app-missioncontrol',
  template: `
    <h2>MissionControl</h2>
    <button (click)="announce()">Announce mission</button>
    <app-astronaut
      *ngFor="let astronaut of astronauts"
      [astronaut]="astronaut"
    ></app-astronaut>
    <h3>History</h3>
    <ul>
      <li *ngFor="let event of history">{{ event }}</li>
    </ul>
  `,
  providers: [MissionService],
  styleUrls: ['./missioncontrol.component.scss']
})
export class MissioncontrolComponent {
  astronauts: string[] = ['name1', 'name2', 'name3'];
  history: string[] = [];
  missions: string[] = ['hoge', 'hogehoge', 'hogehogehoge'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(astronaut => {
      this.history.push(`${astronaut} confirmed the mission`);
    });
  }

  announce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
}
