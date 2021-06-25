import {Identifier, Record, ReduxState} from 'react-admin';

export type ThemeName = 'light' | 'dark';

export interface AppState extends ReduxState {
  theme: ThemeName;
}

export interface Category extends Record {
  name: String;
}

export interface Product extends Record {
  category_id: Identifier;
  description: string;
  height: number;
  image: string;
  price: number;
  reference: string;
  stock: number;
  thumbnail: string;
  width: number;
}

export type OrderStatus = "ordered" | "delivered" | "cancelled";

export interface Order extends Record {
  status: OrderStatus;
  basket: BasketItem;
  date: Date;
  total: number
}

export interface BasketItem {
  product_id: Identifier;
  quantity: number;
}

export interface Invoice extends Record {
}

export type ReviewStatus = "accepted" | "pending" | "rejected";

export interface Review extends Record {
  date: Date;
  status: ReviewStatus;
  customer_id: Identifier;
  product_id: Identifier;
}

declare global {
  interface Window {
    restServer: any;
  }
}
