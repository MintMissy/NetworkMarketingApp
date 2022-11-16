import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appInvalidInputIcon]',
  standalone: true,
})
export class InvalidInputIconDirective implements OnChanges {
  @Input() invalid!: boolean;
  @Input() invalidColor: string = '#f44336';
  @HostBinding('style.color') color: string = 'unset';

  ngOnChanges(changes: SimpleChanges): void {
    this.color = this.invalid ? this.invalidColor : 'unset';
  }
}
