# Extender Interfaces - App

La extension de interfaces viene de **Poo** donde de esto utilizaremos la herencia para asi tener un código mucho mas mantenible.

### Creamos una Base

Creamos una interface que utilice código que vamos a usar muy a menudo con varias interfaces.

```Typescript
export interface BaseModel {
  id: number| string;
  createdAt: Date;
  updatedAt: Date;
}
```

### Utilizar extend

Para crear una interface teniendo en cuenta otra de base simplemente añadimos la palabra reservada **extend** mas el nombre de donde se extiende.

```Typescript
import { BaseModel } from '../base.model' // Import de la base
import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {// Usamos la base
  /* id: number| string;
  createdAt: Date;
  updatedAt: Date;*/
  title: string;
  stock: number;
  price: number;
  sizes? :Sizes;
  category: Category;
}
```
