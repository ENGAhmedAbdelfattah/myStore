import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';
import { ToastrService } from 'ngx-toastr';
import { SelectAmountService } from 'src/app/services/select-amount.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  /* variable */
  public nums: number[] = [];
  public amountValue: number = 1;
  public AddDoneLocale = false;
  @Input('item') public item: any;
  /* constructor */
  constructor(
    private router: Router,
    private _CardsService: CardsService,
    private _SelectAmountService: SelectAmountService,
    private toastr: ToastrService
  ) {}
  /* methods */
  ngOnInit(): void {
    // get data of options of select in form
    this.nums = this._SelectAmountService.getNums();
    // Change Feedback alert to be center
    this.toastr.toastrConfig.positionClass = 'toast-top-center';
    this.AddDoneLocale = this._CardsService.AddDoneHandle(this.item);
  }
  // Navigate method
  goToItems() {
    this.router.navigate([`/protect-item-details/${this.item.id}`]);
  }
  // Submit method
  onSubmit(event: any) {
    this._CardsService.addCart({
      id: this.item.id,
      name: this.item.name,
      price: this.item.price,
      url: this.item.url,
      description: this.item.description,
      amount: Number(this.amountValue),
    });
    // Feedback alert
    this.toastr.success('Card Added', 'Success 🛒');
    // Update Total
    this._CardsService.getTotal(this._CardsService.getCards());
    this.AddDoneLocale = this._CardsService.AddDoneHandle(this.item);
  }
}
