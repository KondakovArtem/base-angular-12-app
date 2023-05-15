import { Component, Type } from '@angular/core';

export function getViewProviders(cls: Type<any>) {
  return [
    {
      provide: AbstractComponent,
      useExisting: cls,
    },
  ];
}

@Component({
  template: '',
})
export abstract class AbstractComponent {
  protected text: string;

  public getText() {
    return this.text;
  }

  constructor() {
    console.log('hello abstract constructor');
  }
}
