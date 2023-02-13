import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';

// Modules
import { CardCarouselModule } from './card-carousel';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CardCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
