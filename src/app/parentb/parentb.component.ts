import { Component } from '@angular/core';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-parentb',
  template: `<app-child style="border: 1px solid red; display: block"></app-child>`,
})
export class ParentBComponent extends AbstractComponent {
  protected text = 'this is parent b';
}
