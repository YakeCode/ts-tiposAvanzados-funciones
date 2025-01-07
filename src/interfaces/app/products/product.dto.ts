import { Product } from './product.model';

export interface CreateProduct
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string; // Se le envía el id de la categoría con el cual esta relacionado el producto
}

/// Escoger lo que voy a usar de un tipo en especifico
export type example = Pick<
  Product,
  'id' | 'createdAt' | 'updatedAt' | 'category'
>;

export interface UpdateProduct extends Partial<CreateProduct> {}

// Required: Hace que todos los campos sean obligatorios
export type example2 = Required<CreateProduct>;

export interface FindProduct extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>; //El primer readonly hace que no se pueda modificar el objeto y el segundo hace que no se pueda modificar el array. En otras palabras, no deja reasignar el ni deja mutar el array
} // Readonly: Hace que no se pueda modificar el objeto
