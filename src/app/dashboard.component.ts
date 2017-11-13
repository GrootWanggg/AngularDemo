import {Component, OnInit} from '@angular/core';

import {Hero}        from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  isUnchanged = true;
  canSave = true;
  isSpecial = true;
  currentClasses: {};
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      'saveable': !this.canSave,
      'modified': this.isUnchanged,
      'special':  this.isSpecial
    };
  }
  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.setCurrentClasses()
    this.heroService.getHeroes()
      .then(heroes => console.log(heroes));
  }
}
