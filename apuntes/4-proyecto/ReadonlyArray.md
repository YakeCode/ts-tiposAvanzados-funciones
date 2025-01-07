# Readonly Array

Este método nos permite evitar mutaciones en los arrays

```Typescript
const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// No permitirá que se modifique el array con ningún método como por ejemplo

// numbers.push(6); // Error
// numbers.pop(); // Error
// numbers.shift(); // Error
// numbers.unshift(); // Error
// numbers.splice(); // Error
// numbers.fill(); // Error
// numbers.sort(); // Error
// numbers.reverse(); // Error
// numbers.copyWithin(); // Error
```

---

```Typescript
export interface FindProduct extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
} // Readonly: Hace que no se pueda modificar el objeto
```

El primer readonly hace que no se pueda modificar el objeto y el segundo hace que no se pueda modificar el array. En otras palabras, no deja reasignar el ni deja mutar el array
