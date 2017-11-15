/**
 * Created by 王石磊 on 2017/11/14.
 */
/**
 * Created by 王石磊 on 2017/11/14.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import Hero from './../hero';
@Component({
  selector: 'highlight-component',
  templateUrl: './highlight-component.html',
})
export class Highlight implements OnInit {
  color: string;
  hero: Hero;
  ifShow: boolean;
  message: string = '请再输入框输入信息！';

  ngOnInit() {
    this.hero = {
      id: 2,
      name: 'wangshilei1'
    };
    // 构造
    this.ifShow = false;
  }

  onKey(event: any) {
    event === '' ? this.message = '请再输入框输入信息！' : this.message = event;
  }
}
