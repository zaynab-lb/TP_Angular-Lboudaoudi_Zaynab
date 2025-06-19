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
  items: OrderItem[];
  shippingInfo: ShippingInfo;
  paymentInfo: PaymentInfo;
  total: number;
  orderDate: string;
  status: string;
}

export interface OrderItem {
  productId: number;
  productTitle: string;
  quantity: number;
  price: number;
}