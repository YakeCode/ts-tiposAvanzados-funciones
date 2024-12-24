# Interfaces

Es de las caracteristicas mas usadas de **TypeScript** Pues es una de las mejores formas para definir objetos

```TypeScript

// Forma tradicional de tipado
type ProductType = {
  id: number| string;
  name: string;
  price: number;
  sizes: Sizes;
  }

//Uso de interfaces

interface ProductInterface {
  id: number| string;
  name: string;
  price: number;
  sizes? :Sizes;
}
```

# Diferencias Entre type y interface

- Interface necesita un cuerpo y no puede utilizar una sola linea

```Typescript
type Sizes = 'S' | 'M' | 'L' | 'XL'; // Esto no lo dejaria hacer con una interface
```

- Se utiliza para un conjunto de elementos de valores

```Typescript

interface ProductInterface {
  id: number| string;
  name: string;
  price: number;
  sizes? :Sizes;
}
```

- Las interfaces se pueden extender como en **POO** y un Type no se puede estender

```Typescript
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
```
