# Never Type

El tipo **never** en TypeScript significa "esto nunca puede pasar". Sirve para indicar cosas que no tienen sentido lógico en el programa.

Never nos ayuda a detectar algo que detiene nuestro programa

```TypeScript
function manejarCasoImposible(valor: never): never {
    throw new Error(`Valor imposible: ${valor}`);
}

function revisarSemáforo(color: "rojo" | "amarillo" | "verde") {
    if (color === "rojo") {
        console.log("Detente");
    } else if (color === "amarillo") {
        console.log("Precaución");
    } else if (color === "verde") {
        console.log("Avanza");
    } else {
        manejarCasoImposible(color); // Aquí usamos el `never` explícito
    }
}
```

never se usa cuando algo no puede pasar jamás en el programa o cuando una función nunca devuelve nada porque, por ejemplo, siempre lanza un error.

## Ejemplo

```Typescript
const fail = (message:string)=>{
  throw new Error(message)
}

const example = (input:unknown) =>{
  if(typeof input === 'string'){
    return 'es un string'
  }else if(Array.isArray(input)){
    return 'es un array'
  }
  return fail
}

console.log(example('hola')) // es un string
console.log(example([1,2,3])) // es un array
console.log(example(123))// detiene la ejecución del programa

console.log(example('hola'))// No lo corre porque el llamado anterior la detuvo
```
