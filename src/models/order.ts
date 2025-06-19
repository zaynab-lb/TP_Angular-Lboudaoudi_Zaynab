import { ShoppingCartItem } from "./ShoppingCartItem";

export interface ShippingInfo {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  email: string;
}

export interface PaymentInfo {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

export interface Order {
  orderId: number;
  userId: number;
  items: ShoppingCartItem[];
  shippingInfo: ShippingInfo;
  paymentInfo: PaymentInfo;
  total: number;
  orderDate: string;
  status: string;
}