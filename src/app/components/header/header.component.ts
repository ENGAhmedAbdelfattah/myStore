import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  /* variable */
  public total: number = 0;
  /* constructor */
  constructor(private _CardsService: CardsService) {}
  /* methods */
  ngOnInit(): void {
    this._CardsService.totalPriceEmitter.subscribe(
      (total) => (this.total = total)
    );
  }
}
