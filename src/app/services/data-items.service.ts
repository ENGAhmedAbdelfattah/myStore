// Modules
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// models
import { Product, FormData } from '../models/interfaces.model';

@Injectable({
  providedIn: 'root',
})

export class DataItemService {
  public dataCards: Product[] = [];
  public totalPrice: number = 0;
  public AllFormData: FormData[] = [];
  public lastUpdateFormData: FormData = {
    fullName: '',
    address: '',
    creditNumber: 0,
    amount: 0,
  };
  public totalPriceEmitter: EventEmitter<number> = new EventEmitter();
  raiseDataEventEmitter(data: number) {
    this.totalPriceEmitter.emit(data);
  }

  constructor(private router: Router, private http: HttpClient) {}
  getData(): Observable<[]> {
    return this.http.get<[]>('assets/data.json');
  }
  // public totalDataStream = new Observable((observer) => {
  //   console.log('observer starts', observer);
  //   observer.next(this.totalPrice);
  // });

  // data of options of select in forms
  getNums() {
    const nums: number[] = [];
    for (let i = 1; i <= 10; i++) {
      nums.push(i);
    }
    return nums;
  }
  goToProtectList() {
    this.router.navigate([`/protect-list`]);
  }

  goToSuccess() {
    this.router.navigate([`/success`]);
  }

  // Cards add and get methods
  addCart(card: Product) {
    this.dataCards = this.dataCards.filter((el) => el.id !== card.id);
    this.dataCards.unshift(card);
    // console.log(card, this.dataCards);
  }
  updateCart(card: Product, amountSelected: number) {
    this.dataCards.filter((el) => el.id === card.id)[0].amount = amountSelected;
    // console.log(card, this.dataCards);
  }
  getCards() {
    return this.dataCards;
  }

  // Add Form Data
  addFormCart(formData: FormData) {
    this.AllFormData.unshift(formData);
    this.lastUpdateFormData = formData;
    console.log(formData);
  }
  updateTotal(total: number) {
    this.totalPrice = total;
    console.log('Service', this.totalPrice);
  }

  deleteCart(card: Product) {
    console.log(this.dataCards);
    this.dataCards = this.dataCards.filter((el) => el.id !== card.id);
    console.log(this.dataCards);
  }

  // Get Total Price
  getTotal(cards: Product[]) {
    const price: (number)[] = cards.map(
      (el: Product) => el.amount? el.amount * el.price : 0
    );
    // console.log(amount);
    this.totalPrice = price.reduce(
      (acc: number, current: number | undefined): number =>
        acc + Number(current),
      0 as number
    );
    this.updateTotal(Number(this.totalPrice.toFixed(2)));
    this.raiseDataEventEmitter(Number(this.totalPrice.toFixed(2)));

    // console.log('local', this.total)
    console.log('Service', this.totalPrice);
    return Number(this.totalPrice.toFixed(2));
  }
}
