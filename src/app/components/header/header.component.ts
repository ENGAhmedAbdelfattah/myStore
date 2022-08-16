import { Component, OnInit } from '@angular/core';
import { DataItemService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public total: any = 0;
  constructor(private _DataItemService: DataItemService) {
  }

  ngOnInit(): void {
    this._DataItemService.totalPriceEmitter.subscribe((total)=> this.total = total);
  }
}
