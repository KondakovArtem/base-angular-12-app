import { Component } from '@angular/core';
import {
  AbstractComponent,
  getViewProviders,
} from '../abstract/abstract.component';

@Component({
  selector: 'app-parentb',
  template: `<app-child style="border: 1px solid red; display: block"></app-child>`,
  viewProviders: getViewProviders(ParentBComponent),
})
export class ParentBComponent extends AbstractComponent {
  protected text = 'this is parent b';
}
