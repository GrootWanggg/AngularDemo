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
  childName = "王石磊";
  currentClasses: {};
  state = {
    test: 0
  }

  changeNum() {
    this.state.test++;
  }

  setCurrentClasses() {

    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      'saveable': !this.canSave,
      'modified': this.isUnchanged,
      'special': this.isSpecial
    };
  }

  onVoted() {
    alert("我收到了子组件的信息");
  }

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.setCurrentClasses()
    this.heroService.getHeroes()
      .then(heroes => console.log(heroes));
  }
}
