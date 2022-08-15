import { Component, OnInit } from '@angular/core';
import { DataItemService } from 'src/app/services/data-items.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  public fullName: string = '';
  public total: number = 0;

  constructor(private _DataItemService: DataItemService) {}

  ngOnInit(): void {
    this.fullName = this._DataItemService.lastUpdateFormData.fullName;
    this.total = this._DataItemService.totalPrice;
  }
  goToProtectList() {
    return this._DataItemService.goToProtectList();
  }
}
