/**
 * Created by 王石磊 on 2017/11/15.
 */
import { Component } from '@angular/core';

import { LoginType }    from './loginType';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html'
})
export class LoginComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new LoginType(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
