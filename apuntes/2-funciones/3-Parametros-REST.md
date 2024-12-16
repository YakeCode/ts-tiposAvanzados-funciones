# Flexibilidad En Parámetros

Los rest params en TypeScript son una forma de recibir una cantidad desconocida de argumentos en una función haciendola mas flexible y reutilizable. En lugar de definirlos uno por uno, los agrupas en un array usando **...**

##Cómo funciona?
**1** Usas ... antes de un nombre de parámetro en la función. Esto le dice a TypeScript:
"Agrupa todos los valores extra que reciba esta función en un solo array con este nombre".

**2** Dentro de la función, puedes usar ese array para trabajar con los valores como lo harías normalmente con cualquier array (sumarlos, recorrerlos, filtrarlos, etc.).

```Typescript
function sumarNumeros(...numeros: number[]): number {
  // Aquí 'numeros' es un array con todos los números que reciba la función.
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumarNumeros(1, 2, 3, 4)); // Resultado: 10
console.log(sumarNumeros(5, 10));      // Resultado: 15
```

---

### Ejemplo

```Typescript

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = "customer",
  USER = 'user',
}

export type User = {
  username: string
  role : ROLES
}

const currentUser:User = {
  username: 'Yake',
  role : ROLES.ADMIN
};

// Rest

export const checkRoleRest = ( ...roles: ROLES[] ) =>{
  if (roles.includes(currentUser.role)){
    return true;
  }
  return false;

}

const rta2 = checkRoleRest(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);

console.log('checkRoleRest', rta2);

```
