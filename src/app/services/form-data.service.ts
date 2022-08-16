import { Injectable } from '@angular/core';
import { FormData } from '../models/interfaces.model';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  public AllFormData: FormData[] = [];
  public lastUpdateFormData: FormData = {
    fullName: '',
    address: '',
    creditNumber: 0,
    amount: 0,
  };
  constructor() {}

  // Add Form Data
  addFormCart(formData: FormData) {
    this.AllFormData.unshift(formData);
    this.lastUpdateFormData = formData;
    console.log(formData);
  }
}
