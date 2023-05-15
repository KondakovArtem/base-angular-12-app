import { Component } from '@angular/core';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-parentb',
  template: `<app-child></app-child>`,
})
export class ParentBComponent extends AbstractComponent {
  text = 'this is parent b';

  constructor() {
    super();
  }
}
