export interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
  amount?: number;
}

export interface FormData {
  fullName: string;
  address: string;
  creditNumber: number | undefined;
  amount: number;
}

