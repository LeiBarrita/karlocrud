interface ErrorMessage {
  message: string;
}

export interface User {
  id: int;
  name: string;
  email: string;
  verified: boolean;
  roleId: int;
}

export type ListOfUsers = User[];

export interface Shop {
  id: int;
  name: string;
  userId: int;
}

export type ListOfShops = Shop[];

export interface Product {
  id: int;
  name: string;
  quantity: int;
  price: number;
  available: boolean;
  shopId: int;
}

export type ListOfProducts = Product[];
