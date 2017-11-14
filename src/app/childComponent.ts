/**
 * Created by 王石磊 on 2017/11/14.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Hero}        from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'child-Component',
  template: ' <div (click)="pushParents()">{{name}}</div>'
})
export class ChildComponent{
  @Input() name: string;
  @Output() onVoted = new EventEmitter<boolean>();

  pushParents() {
    this.onVoted.emit();
  }
}
