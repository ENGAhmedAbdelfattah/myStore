import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  constructor(private router: Router) {}

  /* Start: Navigate*/
  // Navigate to Protect List page
  goToProtectList() {
    this.router.navigate([`/protect-list`]);
  }

  // Navigate to Success page
  goToSuccess() {
    this.router.navigate([`/success`]);
  }
  /* End: Navigate*/
}
