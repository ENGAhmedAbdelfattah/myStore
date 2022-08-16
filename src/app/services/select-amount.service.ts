import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectAmountService {
  constructor() {}

  // data of options of select in forms
  getNums() {
    const nums: number[] = [];
    for (let i = 1; i <= 10; i++) {
      nums.push(i);
    }
    return nums;
  }
}
