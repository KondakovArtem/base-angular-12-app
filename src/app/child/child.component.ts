import { Component, Host, Inject, Injector, SkipSelf } from '@angular/core';
import {
  AbstractComponent,
  PARENT_ELEMENT,
} from '../abstract/abstract.component';

@Component({
  selector: 'app-child',
  template: `<div> ChildComponent {{parent}} </div>`,
})

export class ChildComponent {
  
  @Inject(PARENT_ELEMENT) parent: any;

  constructor() {
    // @Host() public parent: AbstractComponent,
    // private injector: Injector
    debugger;

    // const test = this.injector.get(AbstractComponent);
  }
}
