import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private submitStatus: boolean = false;
  constructor() {}
  isSubmit(value: boolean) {
    this.submitStatus = true;
  }
  getSubmitStatus() {
    return this.submitStatus;
  }
}
