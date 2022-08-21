// Modules
import { Injectable, EventEmitter } from '@angular/core';
// models
import { Product } from '../models/interfaces.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  /* variable */
  public dataCards: Product[] = [];
  public totalPrice: number = 0;
  public AddDone: boolean = false;

  // Emit total price
  public totalPriceEmitter: EventEmitter<number> = new EventEmitter();
  raiseDataEventEmitter(data: number) {
    this.totalPriceEmitter.emit(data);
  }
  /* methods */
  /* Start: Cards Cards add, get and delete methods */
  addCart(card: Product) {
    this.dataCards = this.dataCards.filter((el) => el.id !== card.id);
    this.dataCards.unshift(card);
  }

  AddDoneHandle(item:Product) {
    return this.dataCards.find((el) => el.id === item.id) ? true : false;
  };
  // Update Cart
  updateCart(card: Product, amountSelected: number) {
    this.dataCards.filter((el) => el.id === card.id)[0].amount = amountSelected;
  }
  //Get All Cards
  getCards() {
    return this.dataCards;
  }

  // Get Delete Cart
  deleteCart(card: Product) {
    console.log(this.dataCards);
    this.dataCards = this.dataCards.filter((el) => el.id !== card.id);
    console.log(this.dataCards);
  }
  /* End: Cards add, get and delete methods */

  /* Start: Total Get and Update methods */
  // Update Total
  updateTotal(total: number) {
    this.totalPrice = total;
  }

  // Get Total Price
  getTotal(cards: Product[]) {
    const price: number[] = cards.map((el: Product) =>
      el.amount ? el.amount * el.price : 0
    );
    this.totalPrice = price.reduce(
      (acc: number, current: number | undefined): number =>
        acc + Number(current),
      0 as number
    );
    this.updateTotal(Number(this.totalPrice.toFixed(2)));
    this.raiseDataEventEmitter(Number(this.totalPrice.toFixed(2)));
    return Number(this.totalPrice.toFixed(2));
  }
  /* End: Total Get and Update methods */
}
