import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuiCardModule } from '@ziggymusician/awesome-ui';

// Components
import { CardCarouselComponent } from './card-carousel.component';

@NgModule({
  declarations: [CardCarouselComponent],
  imports: [CommonModule, AuiCardModule],
  exports: [CardCarouselComponent],
})
export class CardCarouselModule {}
