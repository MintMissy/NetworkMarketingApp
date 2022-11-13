import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProductFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
