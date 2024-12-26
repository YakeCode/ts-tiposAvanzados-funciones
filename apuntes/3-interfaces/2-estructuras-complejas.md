# Application

## 1 Anidación de Interfaces

- Creamos las interfaces necesarias y a la hora de mandarla es como si fuese una propiedad.

* Las interfaces las definimos con export para poderlas reutilizar

```Typescript
export interface Category {
  id: string | number;
  name: string;
}
```

- Mandamos la interface como parámetro, y la recibimos desde donde la vamos a usar.

```Typescript

import { Category } from "../categories/category.model"; //Importamos la interface ya creada

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product {
  id: number| string;
  name: string;
  price: number;
  sizes? :Sizes;
  category: Category; //La anidamos a otra interface lo cual crea que  el código sea mas mantenible y reusable.
}
```
