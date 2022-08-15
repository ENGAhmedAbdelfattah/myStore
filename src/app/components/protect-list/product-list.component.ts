import { Component, Input, OnInit } from '@angular/core';
import { DataItemService } from '../../services/data-items.service';
import { Product } from '../../models/interfaces.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private _DataItemService: DataItemService
  ) {}
  public items: Product[] = [];
  ngOnInit(): void {
    this._DataItemService.getData().subscribe((data) => {
      this.items = data;
    });
  }
}
