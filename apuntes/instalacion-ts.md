# Instalación de Ts

- 1 Instalamos Ts

```Bash
npm install typescript --save-dev
```

- 2 Generamos el archivo de configuración Ts

```Bash
npx tsc --init
```

- 2.1 Luego de esto en el archivo que crea tsconfig decimos donde hará el compilado

```Javascript
"outDir": "./dist"
```

- 3 Verificamos la Versión Ts

```Bash
npx tsc --version
```

- 4 Utilizar compilación constante

```Bash
npx tsc --watch
```

## Ts-Node

Esta librería nos deja correr typescript desde node

```Bash
npm install -D ts-node
```

- Correr el archivo Ts

```Bash
npx ts-node [archivo-ts]
```
