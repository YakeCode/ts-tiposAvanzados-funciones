# Omit

### Utility Types

**DTOS** Data Transfer Objet esto significa que son objetos de transferencia. En otras palabras significa que al manejar un objeto hay cosas que el usuario obviara porque estas estas ya definidas por el sistema, como por ejemplo un Id, Una fecha de creación. Etc...

## Omit

Para solucionar este problema tenemos un utility Type llamado **Omit**, que lo que hace es omitir esos tipos a la hora de usarlos

```Typescript

// Tipado
import { BaseModel } from '../base.model';
import { Category } from '../categories/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';
```

**Definición de la interfaz `Product`**:

```typescript
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  sizes?: Sizes;
  color?: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}

export interface CreateProduct extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
  categoryId: string; // Se le envía el id de la categoría con el cual esta relacionado el producto
}
```

## Pick

Es la misma idea del omit, pero en vez de omitir los campos yo voy a escogerlos y crearuia un tipo nueo a partir de estos tipos anteriores

```Typescript

type example = Pick<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;

// Esta seria su salida

type example = {
    readonly id: string;
    createdAt: Date;
    updatedAt: Date;
    category: Category;
}
```
