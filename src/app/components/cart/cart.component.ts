import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
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
    private _CardsService: CardsService,
    private _NavigateService: NavigateService
  ) {}
  /* methods */
  ngOnInit(): void {
    this.cards = this._CardsService.getCards();
    this.total = this._CardsService.getTotal(this.cards);
    this._CardsService.totalPriceEmitter.subscribe(
      (total) => (this.total = total)
    );
    if (this._CardsService.getTotal(this.cards) === 0) {
      this.totalNotesStatue = true;
    }
  }

  templateGetTotal(cards: Product[]) {
    this._CardsService.getTotal(cards);
  }

  onCardsChange() {
    this.cards = this._CardsService.getCards();
    this.total = this._CardsService.getTotal(this.cards);
    this._CardsService.raiseDataEventEmitter(this.total);
    if (this._CardsService.getTotal(this.cards) === 0) {
      this.totalNotesStatue = true;
    }
  }
  goToProtectList() {
    return this._NavigateService.goToProtectList();
  }
}
