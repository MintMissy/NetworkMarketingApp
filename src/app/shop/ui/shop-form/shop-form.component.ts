import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FormActionsComponent } from 'src/app/core/components/forms/form-actions/form-actions.component';
import { ShopDetailsFormComponent } from '../shop-details-form/shop-details-form.component';

@Component({
  selector: 'app-shop-form',
  standalone: true,
  imports: [CommonModule, FormActionsComponent, ShopDetailsFormComponent, ReactiveFormsModule],
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopFormComponent implements OnInit {
  @Input() title: string = 'Default Title';
  shopForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.shopForm = this.getForm();
  }

  onSubmit() {
    const value = this.shopForm.value;
  }

  private getForm(): FormGroup<any> {
    return this._formBuilder.group({
      details: this._formBuilder.group({
        name: [''],
        description: [''],
        shopBanner: [''],
      }),
    });
  }
}
