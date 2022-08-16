import { Component, OnInit } from '@angular/core';
import { DataItemService } from 'src/app/services/cards.service';
import { FormDataService } from 'src/app/services/form-data.service';
import { NavigateService } from 'src/app/services/navigate.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  public fullName: string = '';
  public total: number = 0;

  constructor(
    private _DataItemService: DataItemService,
    private _NavigateService: NavigateService,
    private _FormDataService: FormDataService
  ) {}

  ngOnInit(): void {
    this.fullName = this._FormDataService.lastUpdateFormData.fullName;
    this.total = this._DataItemService.totalPrice;
  }
  goToProtectList() {
    return this._NavigateService.goToProtectList();
  }
}
