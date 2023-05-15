import { Component, forwardRef } from '@angular/core';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-parenta',
  template: `<app-child style="display:block; border: 1px solid green"></app-child>`,
  // viewProviders: getViewProviders(ParentAComponent),
})
export class ParentAComponent extends AbstractComponent {
  protected text = 'this is parent a';
}
