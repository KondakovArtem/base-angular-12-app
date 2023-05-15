import { Component, forwardRef } from '@angular/core';
import {
  AbstractComponent,
  getViewProviders,
} from '../abstract/abstract.component';

@Component({
  selector: 'app-parenta',
  template: `<app-child style="display:block; border: 1px solid green"></app-child>`,
  viewProviders: getViewProviders(ParentAComponent),
})
export class ParentAComponent extends AbstractComponent {
  getText() {
    return 'this is parent a';
  }
}
