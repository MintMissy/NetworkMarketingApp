import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeInputType]',
  standalone: true,
  host: {
    '[style.cursor]': '"pointer"',
  },
})
export class ChangeInputTypeDirective implements OnInit {
  @Input() toggledIcon: string = 'visibility';
  @Input() hiddenIcon: string = 'visibility_off';

  @Input() toggledType: string = 'password';
  @Input() hiddenType: string = 'text';

  @Input() ariaLabelShow: string = 'Show Password';
  @Input() ariaLabelHide: string = 'Hide Password';

  @Input() input!: HTMLInputElement;

  constructor(private _elementRef: ElementRef) {}

  ngOnInit(): void {
    this._elementRef.nativeElement.ariaLabel = this.ariaLabelShow;
  }

  @HostListener('click')
  onClick() {
    if (this.input.type === this.toggledType) {
      this.input.type = this.hiddenType;
      this._elementRef.nativeElement.innerText = this.hiddenIcon;
      this._elementRef.nativeElement.ariaLabel = this.ariaLabelHide;
    } else {
      this.input.type = this.toggledType;
      this._elementRef.nativeElement.innerText = this.toggledIcon;
      this._elementRef.nativeElement.ariaLabel = this.ariaLabelShow;
    }
  }
}
