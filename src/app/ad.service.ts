import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, { name: 'name1', bio: 'hoge' }),
      new AdItem(HeroProfileComponent, { name: 'name2', bio: 'hogehoge' }),
      new AdItem(HeroJobAdComponent, { headline: 'fuga', body: 'fuga1' }),
      new AdItem(HeroJobAdComponent, { headline: 'fugafuga', body: 'fuga2' })
    ];
  }
}
