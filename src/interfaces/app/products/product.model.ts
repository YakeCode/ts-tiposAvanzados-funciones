// Tipado
import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product {
  id: number| string;
  name: string;
  price: number;
  sizes? :Sizes;
  category: Category;
}
