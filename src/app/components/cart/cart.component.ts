import { Component, OnInit } from '@angular/core';
import { DataItemService } from 'src/app/services/data-items.service';
import { Product } from './../../models/interfaces.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private _DataItemService: DataItemService) {}
  public cards: Product[] = [];
  public total: number = 0;

  ngOnInit(): void {
    this.cards = this._DataItemService.getCards();
    this.total = this._DataItemService.getTotal(this.cards);
    this._DataItemService.totalPriceEmitter.subscribe((total)=> this.total = total);
  }

  templateGetTotal(cards : Product[]) {
    this._DataItemService.getTotal(cards);
  }


  onCardsChange() {
    this.cards = this._DataItemService.getCards();
    this.total = this._DataItemService.getTotal(this.cards);
    this._DataItemService.raiseDataEventEmitter(this.total);
    console.log(this.total)
  }
  goToProtectList() {
    return this._DataItemService.goToProtectList();
  }
}
