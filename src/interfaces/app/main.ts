import { faker } from '@faker-js/faker';
import { addProduct, products } from './products/product.service';

for (let index = 0; index < 100; index++) {
  addProduct({
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    title: faker.commerce.productName(),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    stock: 10,
    sizes: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
    tags: faker.helpers.arrayElements(['cat', 'dog', 'mouse']),
    isNew: faker.datatype.boolean(),
  });
}

console.log(products);
