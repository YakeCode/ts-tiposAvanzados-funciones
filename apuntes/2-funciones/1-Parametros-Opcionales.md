# Nullish Coalescing

En los parámetros opcionales por defecto de **Typescript** deben ir declarados siempre de últimos y en caso de no usarlo su salida siempre seria **undefined**.

```Typescript
export const createProduct = (
  id: string |  number,
  stock: number,
  isNew?: boolean
)=>{
  return {
    id,
    stock,
    isNew,
  }
}

const p1 = createProduct('P1',1)
const p2 = createProduct(2,2,true)
console.log(p1) // { id: 'P1', stock: 1, isNew: undefined }
console.log(p2) // { id: 2, stock: 2, isNew: true }
```

## Nullish Coalescing **??**

Para solucionar este **undefined** podemos dar un valor por defecto a la hora de retornar estos parámetros
con el operador **??**

```Typescript
return {
    id,
    stock,
    isNew: isNew ?? true, // True Por Defecto
  }
```

Este operador mandaría por defecto el true **solo cuando no se haya asignado un valor**, en otro caso, asignaría el que se mande en los parámetros a la hora de ejecutar la función.
