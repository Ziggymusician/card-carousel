import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuiCardModule } from '@ziggymusician/awesome-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuiCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
