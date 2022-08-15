import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/interfaces.model';
import { DataItemService } from 'src/app/services/data-items.service';

@Component({
  selector: 'app-cart-added',
  templateUrl: './cart-added.component.html',
  styleUrls: ['./cart-added.component.css'],
})
export class CartAddedComponent implements OnInit {
  @Input('card') public card: any;

  public nums: number[] = [];
  public amountValue: number = 1;
  public cartUpdate: object = {};

  constructor(private _DataItemService: DataItemService) {}

  ngOnInit(): void {
    this.amountValue = this.card.amount;
    this.nums = this._DataItemService.getNums();
    this.cartUpdate = { ...this.card };
  }

  @Output() public selectionChange: EventEmitter<number> =
    new EventEmitter<number>();
  onSelectionChange() {
    this._DataItemService.updateCart(this.card, this.amountValue);
    this.selectionChange.emit(this.amountValue);
  }

  @Output() public cartsUpdate: EventEmitter<object> =
    new EventEmitter<object>();
  deleteThisCart() {
    this._DataItemService.deleteCart(this.card);
    this.cartsUpdate.emit(this.card);
  }
}
