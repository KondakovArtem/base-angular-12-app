import { NgModule } from '@angular/core';

import { ChildComponent } from './child.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ChildComponent],
  exports: [ChildComponent],
  imports: [CommonModule],
})
export class ChildModule {}
