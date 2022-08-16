import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/interfaces.model';
import { DataItemService } from 'src/app/services/cards.service';
import { SelectAmountService } from 'src/app/services/select-amount.service';

@Component({
  selector: 'app-cart-added',
  templateUrl: './cart-added.component.html',
  styleUrls: ['./cart-added.component.css'],
})
export class CartAddedComponent implements OnInit {
  @Input('card') public card: any;
  /* variable */
  public nums: number[] = [];
  public amountValue: number = 1;
  public cartUpdate: object = {};
  /* constructor */
  constructor(private _DataItemService: DataItemService,private _SelectAmountService: SelectAmountService) {}
  /* methods */
  ngOnInit(): void {
    this.amountValue = this.card.amount;
    this.nums = this._SelectAmountService.getNums();
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
