import { addProduct } from "./products/product.service";

addProduct({
  id: 2,
  name: "p2",
  price: 3,
  sizes: "M" ,
  category: { id: 1, name: "c1" }
});
