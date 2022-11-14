import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeInputType]',
  standalone: true,
})
export class ChangeInputTypeDirective {
  @Input() toggledIcon: string = 'visibility';
  @Input() hiddenIcon: string = 'visibility_off';

  @Input() toggledType: string = 'password';
  @Input() hiddenType: string = 'text';

  @Input() input!: HTMLInputElement;

  constructor(private _elementRef: ElementRef) {}

  @HostListener('click')
  onClick() {
    if (this.input.type === this.toggledType) {
      this.input.type = this.hiddenType;
      this._elementRef.nativeElement.innerText = this.hiddenIcon;
    } else {
      this.input.type = this.toggledType;
      this._elementRef.nativeElement.innerText = this.toggledIcon;
    }
  }
}
