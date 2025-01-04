import { Product } from './product.model';

export interface CreateProduct
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string; // Se le envía el id de la categoría con el cual esta relacionado el producto
}

type example = Pick<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;
