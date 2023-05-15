import { Component, forwardRef } from '@angular/core';
import {
  AbstractComponent,
  getViewProviders,
  // MyToken,
  // viewProviders,
} from '../abstract/abstract.component';

@Component({
  selector: 'app-parenta',
  template: `child - <app-child></app-child>`,
  viewProviders: getViewProviders(ParentAComponent),
})
export class ParentAComponent extends AbstractComponent {
  getText() {
    return 'this is parent aa';
  }
}
