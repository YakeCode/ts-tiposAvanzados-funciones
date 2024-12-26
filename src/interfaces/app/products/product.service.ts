//manipulación

import { Product } from './product.model';

export const products: Product[] = [];

export const findProduct = (id: string) => {
  return products.find((product) => product.id === id);
};

export const addProduct = (data: Product) => {
  products.push(data);
};

export const updateProduct = (id: string, changes: Product) => {
  const index = products.findIndex((product) => product.id === id);
  products[index] = { ...products[index], ...changes };
};

export const deleteProduct = (id: string) => {
  const index = products.findIndex((product) => product.id === id);
  products.splice(index, 1);
};
