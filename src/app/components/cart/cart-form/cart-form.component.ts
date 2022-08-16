import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataItemService } from 'src/app/services/data-items.service';
import { NavigateService } from 'src/app/services/navigate.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css'],
})
export class CartFormComponent implements OnInit {
  public fullName: string = '';
  public address: string = '';
  public creditNumber: number | undefined = undefined;
  constructor(
    private _DataItemService: DataItemService,
    private _AuthService: AuthService,
    private _NavigateService: NavigateService
  ) {}

  ngOnInit(): void {}
  onSubmit(event: any) {
    // console.log(event);
    this._DataItemService.addFormCart({
      fullName: this.fullName,
      address: this.address,
      creditNumber: this.creditNumber,
      amount: this._DataItemService.totalPrice,
    });
    this._AuthService.isSubmit(true);
    this._NavigateService.goToSuccess();
  }
}
