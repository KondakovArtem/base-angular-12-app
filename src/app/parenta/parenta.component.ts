import { Component, forwardRef } from '@angular/core';
import {
  AbstractComponent,
  // MyToken,
  // viewProviders,
} from '../abstract/abstract.component';

@Component({
  selector: 'app-parenta',
  template: `child - <app-child></app-child>`,
})
export class ParentAComponent extends AbstractComponent {
  text = 'this is parent aa';

  constructor() {
    super();
  }
}
