import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'aui-card',
  templateUrl: './aui-card.component.html',
  styleUrls: ['./aui-card.component.scss'],
})
export class AuiCardComponent {
  @Input()
  public icon!: string;

  @Input()
  public title!: string;

  @Input()
  @HostBinding('style.width')
  public width!: string;

  @Input()
  @HostBinding('style.height')
  public height!: string;

  @Input()
  @HostBinding('class.active')
  public isActive!: boolean;

  @Input()
  @HostBinding('class.hover')
  public isHoverOnlyActive: boolean = false;

  @Output()
  public cardClick: EventEmitter<void> = new EventEmitter<void>();

  public onActionClicked(): void {
    this.cardClick.emit();
  }
}
