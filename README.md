# ts-tiposAvanzados-funciones

Curso de Typescript realizado por platzi

<div style="text-align: center;">
  <img src="image/Certificado%20Ts.jpg" alt="Certificado" width="550" height="400">
</div>

**Nota :** Si deseo que una variable sea sola de lectura al definirla puedo usar la palabra reservada **readonly**

```Typescript
export interface BaseModel {
  readonly id: number| string;
  createdAt: Date;
  updatedAt: Date;
}
```

En este caso estamos indicando que el id no pueda ser sobrescrito.

---

### Utility Types

**DTOS** Data Transfer Objet esto significa que son objetos de transferencia. En otras palabras significa que al manejar un objeto hay cosas que el usuario obviara porque estas estas ya definidas por el sistema, como por ejemplo un Id, Una fecha de creación. Etc...

---

### Acceder al Tipado por indice

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
