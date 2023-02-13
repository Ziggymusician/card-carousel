import { Component, OnInit } from '@angular/core';

// Models
import { CardInfo } from '../models';

// Services
import { CarouselService } from '../services';

@Component({
  selector: 'card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss'],
})
export class CardCarouselComponent implements OnInit {
  public cards!: CardInfo[];
  public activeIndex: number = 0;

  constructor(private carouselService: CarouselService) {}

  public ngOnInit(): void {
    this.updateCards();
    this.setActiveCardIndex();
  }

  public onChangeCard(isNext: boolean): void {
    if (isNext) {
      this.carouselService.next();
    } else {
      this.carouselService.prev();
    }

    this.updateCards();
  }

  public trackById(index: number, card: CardInfo): number {
    return card.id;
  }

  private updateCards(): void {
    this.cards = this.carouselService.getData();
  }

  private setActiveCardIndex(): void {
    if (this.cards.length === 0) {
      return;
    }

    if (this.cards.length <= 2) {
      this.activeIndex = 0;
    } else if (this.cards.length > 2 && this.cards.length <= 4) {
      this.activeIndex = 1;
    } else {
      this.activeIndex = 2;
    }
  }
}
