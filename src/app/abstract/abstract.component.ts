import {
  Component,
  forwardRef,
  inject,
  Injectable,
  InjectionToken,
  Type,
} from '@angular/core';

export function getViewProviders(cls: Type<any>) {
  return [
    {
      provide: AbstractComponent,
      useExisting: cls,
    },
  ];
}

export const MyToken = new InjectionToken<AbstractComponent>('MyToken');
// export const viewProviders = [
//   {
//     provide: MyToken,
//     useExisting: forwardRef(() => AbstractComponent),
//   },
// ];

@Injectable()
@Component({
  template: '',
})
export abstract class AbstractComponent {
  text = 'this is abstract';

  public abstract getText(): string;

  constructor() {
    console.log('hello abstract constructor');
  }
}
