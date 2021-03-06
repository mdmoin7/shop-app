export interface ProductType {
  salePrice: number;
  // property_name:data_type
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  productStock: boolean;
}

export interface MenuType {
  navLink: string;
  navText: string;
}

export interface UserSessionType {
  user: object;
  error: string;
}

export interface StoreType {
  currency: string;
  cart: ProductType[];
  userSession: UserSessionType;
}
