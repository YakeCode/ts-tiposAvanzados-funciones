export const createProduct = (
  id: string |  number,
  stock: number,
  isNew?: boolean
)=>{
  return {
    id,
    stock,
    isNew: isNew ?? true, // True Por Defecto
  }
}

const p1 = createProduct('P1',1)
const p2 = createProduct(2,2,true)
console.log(p1) // { id: 'P1', stock: 1, isNew: undefined }
console.log(p2) // { id: 2, stock: 2, isNew: true }
