import { faker } from '@faker-js/faker';
import { addProduct, products } from './products/product.service';

for (let index = 0; index < 100; index++) {
  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    stock: 10,
    sizes: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    categoryId: faker.string.uuid(),
    tags: faker.helpers.arrayElements(['cat', 'dog', 'mouse']),
    isNew: faker.datatype.boolean(),
  });
}

console.log(products);
