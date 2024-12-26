import { addProduct } from "./products/product.service";

addProduct({
  id: 1,
  title: 'Producto 1',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 90,
  price: 100,
  sizes: 'S',
  category: {
    id: 1,
    name: 'C1',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})
