import { Injectable } from '@angular/core';

// Models
import { CardInfo } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private _DATA: CardInfo[] = [
    {
      id: 1,
      icon: 'https://via.placeholder.com/225x225',
      title: 'Mobile internet',
    },
    {
      id: 2,
      icon: 'https://via.placeholder.com/225x225',
      title: 'Home internet',
    },
    {
      id: 3,
      icon: 'https://via.placeholder.com/225x225',
      title: 'Get a device',
    },
    {
      id: 4,
      icon: 'https://via.placeholder.com/225x225',
      title: 'Add a phone-line',
    },
    { id: 5, icon: 'https://via.placeholder.com/225x225', title: 'Upgrade' },
    {
      id: 6,
      icon: 'https://via.placeholder.com/225x225',
      title: 'More about us',
    },
    { id: 7, icon: 'https://via.placeholder.com/225x225', title: 'Services' },
  ];

  public getData(): CardInfo[] {
    return this._DATA;
  }

  public prev(): void {
    const data = [...this.getData()];
    const lastItem = data.pop();

    if (lastItem) {
      this._DATA = [lastItem, ...data];
    }
  }

  public next(): void {
    const data = [...this.getData()];
    const firstItem = data.shift();

    if (firstItem) {
      this._DATA = [...data, firstItem];
    }
  }
}
