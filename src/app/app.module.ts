import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ParentAModule } from './parenta/parenta.module';
import { ParentBModule } from './parentb/parentb.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ParentAModule, ParentBModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
