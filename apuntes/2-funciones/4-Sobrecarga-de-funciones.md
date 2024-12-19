# Sobrecarga de funciones

La sobrecarga de funciones solo se puede utilizar con las funciones **Functions**. las **arrow functions** no pueden generra este manejo.

```Typescript
function saludar(nombre: string): string;
function saludar(nombre: string, edad: number): string;
function saludar(nombre: string, edad?: number): string {
  if (edad) {
    return `Hola, ${nombre}. Tienes ${edad} años.`;
  }
  return `Hola, ${nombre}.`;
}
```

---

```Typescript

function parseString(input: string | string[] ): string | string[] {

  if (Array.isArray(input)) {
    return input.join(''); // Retorna un string
  } else{
    return input.split('') // Retorna un array de strings
  }
}

```

## Problema

Esto nos ayuda mucho pues con una funcion nos hacer diferentes trabajos dependiendo el input. **PERO** su problema es que typescrypt no sabria cual de los parametros esta retornando a menos que se ponga de forma explicita.

## Solución

Para esto utilizamos la palabra reservada **function** seguida del nombre de la funcion y tipamos tanto el input como el output sin poner en este tipado la logica aun.

```Typescript
export function parseString(input: string): string[];
export function parseString(input:string[]):string
```

De esta forma ya Typescript sabria que dependiendo una entrada de dato tedria cierta salida, pudiendo dejar la funcion anterior tal cual como estaba o tambien utilizar una fuhcion mucho mas generica.

```Typescript
export function parseString(input: string): string[];
export function parseString(input:string[]):string

// Función mas generica para poder reutilizar la funcion mas facilmente
export  function parseString(input:unknown):unknown{
  if(Array.isArray(input)){
    return input.join('');
  } else if(typeof input === 'string'){
    return input.split('')
  }
}
// Utilización

const rtaArr = parseString('YaKe')

rtaArr.forEach() // deja utilizar los metodos de los arrays

const rtaStr = parseString(['Y,a,K,e'])

rtaStr.toLocaleLowerCase() // Deja utilizat los metodos de los strings
```
