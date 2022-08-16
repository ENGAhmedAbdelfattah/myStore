import { Component } from '@angular/core';
import { DataItemService } from './services/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataItemService],
})
export class AppComponent {
  title = 'my-store';
  constructor(private _DataItemService: DataItemService) {}
}
