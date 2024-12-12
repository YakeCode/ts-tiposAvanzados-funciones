# Unknown Type

Es un tipo el cual nos dice que una variable es desconocida y puede ser cualquier cosa pero a diferencia de **Any** este es mas estricto porque obliga a verificar el tipo de valor antes de usarlo por lo cual nos ayuda a que la estructura sea mas solida y evita errores.

```Typescript
let dato: unknown = "Hola";
console.log(dato.toUpperCase()); // Error: No sabemos si realmente es un string.
```

```Typescript
if (typeof dato === "string") {
    console.log(dato.toUpperCase()); // Ahora sí, sabemos que es un string.
}
```

**Unknown** nos permite asignar cualquier valor a una variable pero a la hora de utilizarla siempre nos va a pedir una valuación de **Typo**

```Typescript
if (typeof unknownVar === "string") {
  const strVar = unknownVar as string;
  console.log(strVar.toUpperCase());
}
```

## Uso en Funciones

```Typescript
const parse = (str:string): unknown => {
  return JSON.parse(str)
}

const jsonString = '{"name": "Yake", "age": 26}'
```
