import { Component, Input, OnInit } from '@angular/core';
import { DataItemService } from '../../services/cards.service';
import { Product } from '../../models/interfaces.model';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  /* variable */
  public items: Product[] = [];
  /* constructor */
  constructor(
    private _DataItemService: DataItemService,
    private _JsonDataService: JsonDataService
  ) {}
  /* methods */
  ngOnInit(): void {
    this._JsonDataService.getData().subscribe((data) => {
      this.items = data;
    });
  }
}
