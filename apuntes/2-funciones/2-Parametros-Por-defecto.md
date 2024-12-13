# Parámetros por defecto

En **Typescript** podemos asignar unos valores por defecto de forma diferente de la **nullish Coalescing**

En los parámetros con el **'='** le asignamos el valor que va a llevar por defecto, y le quitamos el símbolo **'?'**.

```Typescript
export const createProduct = (
  id: string |  number,
  stock: number = 0,
  //isNew?: boolean -> ya no se usa el '?'
  isNew: boolean = true,
)=>{
  return {
    id,
    stock,
    /*isNew: isNew ?? true, -> ya no se usa*/
    isNew, /*Se manda el Parámetro normal*/
  }
}

const p1 = createProduct('P1',1)
const p2 = createProduct(2,2,false)
console.log(p1) // { id: 'P1', stock: 1, isNew: true }
console.log(p2) // { id: 2, stock: 2, isNew: false }
```
