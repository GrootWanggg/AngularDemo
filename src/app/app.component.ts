import {Component} from '@angular/core';
export class Hero {
  id: number;
  name: string;
}
const HEROES: Hero[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <div style="align-items: center">
      <h1>{{title}}</h1>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes"
            [class.selected]="hero === selectedHero"
            (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <div (click)="onRemoveSelect()" style="border: 1px solid #000;width: 50%;padding: 5px;border-radius: 5px;background-color: aqua">
        取消选中状态
      </div>
      <div *ngIf="selectedHero">
        <h2>{{selectedHero.name}} details!</h2>
        <div><label>id: </label>{{selectedHero.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="selectedHero.name" placeholder="name"/>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  onRemoveSelect(): void {
    this.selectedHero = null;
  }
}
