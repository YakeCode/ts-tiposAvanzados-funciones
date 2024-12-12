# Tuplas - Tuples

Nos permiten definir un conjunto o un array fuertemente tipado, esto generando una lista especial con un orden fijo y un numero especifico de elementos donde cada uno puede tener u tipo diferente.

```Typescript
//tipado normal de un array
const array :(number | string)[] = [1,2,3,'a','b','c',]

//Tipado de tuplas

const user:[string, number]= ['Yake', 26]

let tupla: [string, number];
tupla = ["Hola", 42]; // Correcto
tupla = [42, "Hola"]; // Error, el orden importa
```
