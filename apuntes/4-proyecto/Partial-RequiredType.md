# Partial

Es un tipo muy común para el momento de actualización, o para momentos en donde necesitamos que un tipo o una interface que ya teníamos sea opcionales sus campos, como por ejemplo el momento de una actualización en un CRUD

```Typescript
export interface
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string; // Se le envía el id de la categoría con el cual esta relacionado el producto
}

//EJEMPLO PARA Una interface
export interface UpdateProduct extends Partial<CreateProduct> {}
// Ejemplo para usarlo con un Type
export type UpdateProduct = Partial<CreateProduct>;
```

**Partial** nos permite que todos los valores que estemos trayendo de el tipo se vuelvan opcionales y nos permita que sean modificables. por lo cual estamos utilizando un subtipo que no tiene los datos dsensibles para evitar errores **(CreateProduct)**

---

# Required Type

Hace que todos los campos sean requridos de forma estricta

```Typescript
export type example2 = Required<CreateProduct>;
```
