import { Component, Host, Inject, SkipSelf } from '@angular/core';
import { AbstractComponent, MyToken } from '../abstract/abstract.component';

@Component({
  selector: 'app-child',
  template: '<div> {{ parent?.text }} my Child</div>',
})
export class ChildComponent {
  text = 'this is child';

  constructor(@Host() public parent: AbstractComponent) {
    debugger;
    console.log(parent);
  }
}
