import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ParentAComponent } from './parenta.component';
import { ChildModule } from '../child/child.module';

@NgModule({
  declarations: [ParentAComponent],
  exports: [ParentAComponent],
  imports: [CommonModule, ChildModule],
})
export class ParentAModule {}
