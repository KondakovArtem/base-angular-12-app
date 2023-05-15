import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ParentBComponent } from './parentb.component';
import { ChildModule } from '../child/child.module';

@NgModule({
  declarations: [ParentBComponent],
  exports: [ParentBComponent],
  imports: [CommonModule, ChildModule],
})
export class ParentBModule {}
