import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CardsService } from 'src/app/services/cards.service';
import { FormDataService } from 'src/app/services/form-data.service';
import { NavigateService } from 'src/app/services/navigate.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css'],
})
export class CartFormComponent implements OnInit {
  /* variable */
  public fullName: string = '';
  public address: string = '';
  public creditNumber: number | undefined = undefined;
  /* constructor */
  constructor(
    private _CardsService: CardsService,
    private _AuthService: AuthService,
    private _NavigateService: NavigateService,
    private _FormDataService: FormDataService
  ) {}
  /* methods */
  ngOnInit(): void {}

  validation(e: any) {
    if (
      this._CardsService.getTotal(this._CardsService.getCards()) === 0 ||
      e.invalid === true
    ) {
      return true;
    }
    return false;
  }

  onSubmit(event: any) {
    this._FormDataService.addFormCart({
      fullName: this.fullName,
      address: this.address,
      creditNumber: this.creditNumber,
      amount: this._CardsService.totalPrice,
    });
    if (this._CardsService.getTotal(this._CardsService.getCards()) !== 0) {
      this._AuthService.isSubmit(true);
      this._NavigateService.goToSuccess();
    } else {
      // this.disabledState = true;
    }
  }
}
