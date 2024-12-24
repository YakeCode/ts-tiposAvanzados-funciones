type Sizes = 'S' | 'M' | 'L' | 'XL'; // LITERAL TYPE

type ProductType = {
  id: number| string;
  name: string;
  price: number;
  sizes: Sizes;
  }

interface ProductInterface {
  id: number| string;
  name: string;
  price: number;
  sizes? :Sizes;
}

const products: ProductInterface[] = [];

products.push({ id:1, name:'p1', price:2, sizes:'S' });

const addProduct = (data: ProductInterface) => {
  products.push(data);
}


