//manipulación

import { faker } from '@faker-js/faker';
import { CreateProduct, FindProduct, UpdateProduct } from './product.dto';
import { Product } from './product.model';

export const products: Product[] = [];
//necesito que sin importar el dato con el que se busque elproducto se pueda encontrar en la funciom findProduct
export const findProduct = (product: FindProduct): Product[] => {
  return products;
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

export const updateProduct = (id: string, changes: UpdateProduct): Product => {
  const index = products.findIndex((product) => product.id === id);
  products[index] = { ...products[index], ...changes };
  return products[index];
};

export const deleteProduct = (id: string) => {
  const index = products.findIndex((product) => product.id === id);
  products.splice(index, 1);
};
