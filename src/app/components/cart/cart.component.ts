import { Component, OnInit } from '@angular/core';
import { DataItemService } from 'src/app/services/cards.service';
import { NavigateService } from 'src/app/services/navigate.service';
import { Product } from './../../models/interfaces.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  /* variable */
  public cards: Product[] = [];
  public total: number = 0;
  public totalNotesStatue: boolean = false;
  /* constructor */
  constructor(
    private _DataItemService: DataItemService,
    private _NavigateService: NavigateService
  ) {}
  /* methods */
  ngOnInit(): void {
    this.cards = this._DataItemService.getCards();
    this.total = this._DataItemService.getTotal(this.cards);
    this._DataItemService.totalPriceEmitter.subscribe(
      (total) => (this.total = total)
    );
    if (this._DataItemService.getTotal(this.cards) === 0) {
      this.totalNotesStatue = true;
    }
  }

  templateGetTotal(cards: Product[]) {
    this._DataItemService.getTotal(cards);
  }

  onCardsChange() {
    this.cards = this._DataItemService.getCards();
    this.total = this._DataItemService.getTotal(this.cards);
    this._DataItemService.raiseDataEventEmitter(this.total);
    if (this._DataItemService.getTotal(this.cards) === 0) {
      this.totalNotesStatue = true;
    }
  }
  goToProtectList() {
    return this._NavigateService.goToProtectList();
  }
}
