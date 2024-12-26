//manipulación

import { Product } from './product.model';

const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
}
