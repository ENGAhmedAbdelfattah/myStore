import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataItemService } from 'src/app/services/cards.service';
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
  public disabledState: boolean = false;
  /* constructor */
  constructor(
    private _DataItemService: DataItemService,
    private _AuthService: AuthService,
    private _NavigateService: NavigateService,
    private _FormDataService: FormDataService
  ) {}
  /* methods */
  ngOnInit(): void {
    if(this._DataItemService.getTotal(this._DataItemService.getCards()) === 0) this.disabledState = true;
  }
  onSubmit(event: any) {
    this._FormDataService.addFormCart({
      fullName: this.fullName,
      address: this.address,
      creditNumber: this.creditNumber,
      amount: this._DataItemService.totalPrice,
    });
    if (
      this._DataItemService.getTotal(this._DataItemService.getCards()) !== 0
    ) {
      this._AuthService.isSubmit(true);
      this._NavigateService.goToSuccess();
    }
  }
}
