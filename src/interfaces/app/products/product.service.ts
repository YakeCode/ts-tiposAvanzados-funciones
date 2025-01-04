//manipulación

import { faker } from '@faker-js/faker';
import { CreateProduct } from './product.dto';
import { Product } from './product.model';

export const products: Product[] = [];

export const findProduct = (id: string) => {
  return products.find((product) => product.id === id);
};

export const addProduct = (data: CreateProduct): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (id: string, changes: Product) => {
  const index = products.findIndex((product) => product.id === id);
  products[index] = { ...products[index], ...changes };
};

export const deleteProduct = (id: string) => {
  const index = products.findIndex((product) => product.id === id);
  products.splice(index, 1);
};
