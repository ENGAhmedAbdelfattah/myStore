import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataItemService } from 'src/app/services/data-items.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  public nums: number[] = [];
  public amountValue: number = 1;
  @Input('item') public item: any;

  constructor(
    private router: Router,
    private _DataItemService: DataItemService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // get data of options of select in form
    this.nums = this._DataItemService.getNums();
    // Change Feedback alert to be center
    this.toastr.toastrConfig.positionClass = 'toast-top-center';
  }
  // Navigate method
  goToItems() {
    this.router.navigate([`/protect-item-details/${this.item.id}`]);
  }
  // Submit method
  onSubmit(event: any) {
    // console.log(event);
    this._DataItemService.addCart({
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
    this._DataItemService.getTotal(this._DataItemService.getCards())
  }
}
