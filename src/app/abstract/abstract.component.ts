import {
  Component,
  InjectionToken,
  Injector,
  ReflectiveInjector,
  Type,
} from '@angular/core';

export const PARENT_ELEMENT = new InjectionToken('PARENT_ELEMENT');

// export function getViewProviders(cls: Type<any>) {
//   return [
//     {
//       provide: AbstractComponent,
//       useExisting: cls,
//     },
//   ];
// }

@Component({
  template: '',
  viewProviders: [
    {
      provide: PARENT_ELEMENT,
      useValue: '123',
    },
  ],
})
export abstract class AbstractComponent {
  protected text: string;

  public getText() {
    return this.text;
  }

  constructor(existing: Injector) {
    console.log('hello abstract constructor');
    debugger;
    // const newInjector = ReflectiveInjector.resolveAndCreate(
    //   [
    //     {
    //       provide: PARENT_ELEMENT,
    //       useValue: this,
    //     },
    //   ],
    //   existing
    // );
  }
}
