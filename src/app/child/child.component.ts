import { Component, Host, Inject, SkipSelf } from '@angular/core';
import { AbstractComponent, MyToken } from '../abstract/abstract.component';

@Component({
  selector: 'app-child',
  template: `<div> ChildComponent {{ parent?.getText() }} </div>`,
})
export class ChildComponent {
  constructor(@Host() public parent: AbstractComponent) {}
}
