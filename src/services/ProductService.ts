import { ProductType } from "../types";
import ApiService from "./ApiService";

// services/ProductService.ts
export const getProducts = () => {
  const url =
    "https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json";
  return ApiService.get<ProductType[]>(url);
};
