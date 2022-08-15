import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataItemService } from 'src/app/services/data-items.service';
import { Product } from '../../models/interfaces.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css'],
})
export class ProductItemDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _DataItemService: DataItemService,
    private toastr: ToastrService
  ) {}
  public itemId = Number(this.route.snapshot.paramMap.get('id'));
  public items: Product[] = [];
  public itemActive: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
  };
  public nums: number[] = [];
  public amountValue: number = 1;

  ngOnInit(): void {
    this._DataItemService.getData().subscribe((data) => {
      this.items = data;
      this.itemActive = this.items.filter((el) => el.id === this.itemId)[0];
      this.nums = this._DataItemService.getNums();
    });
  }
  goToProtectList() {
    return this._DataItemService.goToProtectList();
  }
  onSubmit(event: any) {
    console.log(event);
    this._DataItemService.addCart({
      id: this.itemActive.id,
      name: this.itemActive.name,
      price: this.itemActive.price,
      url: this.itemActive.url,
      description: this.itemActive.description,
      amount: Number(this.amountValue),
    });
    // Feedback alert
    this.toastr.success('Card Added', 'Success 🛒');
    this._DataItemService.raiseDataEventEmitter(5);
  }
}
