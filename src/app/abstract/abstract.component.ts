import {
  Component,
  forwardRef,
  inject,
  Injectable,
  InjectionToken,
} from '@angular/core';

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
  providers: [
    {
      provide: AbstractComponent,
      useExisting: AbstractComponent,
    },
  ],
})
export class AbstractComponent {
  text = 'this is abstract';

  constructor() {
    console.log('hello abstract constructor');
  }
}
