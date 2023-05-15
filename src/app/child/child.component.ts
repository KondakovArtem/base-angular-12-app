import { Component, Host, Inject, SkipSelf } from '@angular/core';
import { AbstractComponent, MyToken } from '../abstract/abstract.component';

@Component({
  selector: 'app-child',
  template: `<div> {{ parent?.getText() ?? 'not text' }} my Child</div>`,
})
export class ChildComponent {
  constructor(@Host() public parent: AbstractComponent) {}
}
