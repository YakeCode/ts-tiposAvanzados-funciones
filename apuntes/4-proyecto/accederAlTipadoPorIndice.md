# Acceder al Tipado por indice

Para acceder al Tipado por indice solo debemos hacer referencia al tipo del objeto y dentro de corchetes escribimos el método al cual nos estamos refiriendo

```Typescript

export const updateProduct = (
  id: Product['id'],// en este caso nos estamos refiriendo directamente a product y haciendo referencia al Tipado que tenga el id
  changes: UpdateProduct
): Product => {
  const index = products.findIndex((product) => product.id === id);
  products[index] = { ...products[index], ...changes };
  return products[index];
};
```
