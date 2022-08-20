import { Component } from '@angular/core';
import { CardsService } from './services/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CardsService],
})
export class AppComponent {
  title = 'my-store';
  constructor(private _CardsService: CardsService) {}
}
