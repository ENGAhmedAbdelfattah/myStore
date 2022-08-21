import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { FormDataService } from 'src/app/services/form-data.service';
import { NavigateService } from 'src/app/services/navigate.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  /* variable */
  public fullName: string = '';
  public total: number = 0;

  /* constructor */
  constructor(
    private _CardsService: CardsService,
    private _NavigateService: NavigateService,
    private _FormDataService: FormDataService
  ) {}
  /* methods */
  ngOnInit(): void {
    this.fullName = this._FormDataService.lastUpdateFormData.fullName;
    this.total = this._CardsService.totalPrice;
    this._CardsService.dataCards = [] ;
    this._CardsService.getTotal(this._CardsService.getCards())
  }
  goToProtectList() {
    return this._NavigateService.goToProtectList();
  }
}
