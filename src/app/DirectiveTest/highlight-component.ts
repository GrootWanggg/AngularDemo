/**
 * Created by 王石磊 on 2017/11/14.
 */
/**
 * Created by 王石磊 on 2017/11/14.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import Hero from "./../hero"
@Component({
  selector: 'highlight-component',
  templateUrl: './highlight-component.html',
})
export class Highlight implements OnInit {
  color: string;
  hero: Hero[] = [];

  ngOnInit() {
    // 构造
      this.hero = {
        id: 2,
        name: 'wangshilei1'
      };
  }
}
