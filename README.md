# ts-tiposAvanzados-funciones

**Nota :** Si deseo que una variable sea sola de lectura al definrla puedo usar la palabra reservada **readonly**

```Typescript
export interface BaseModel {
  readonly id: number| string;
  createdAt: Date;
  updatedAt: Date;
}
```

En este caso estamos indicando que el id no pueda ser sobrescrito.

---
