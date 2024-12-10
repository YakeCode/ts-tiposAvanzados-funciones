# enums

Da un set de opciones, es similar a los literal Types pero la ventaja que este tiene estructuras más completas o valores reutilizables en tiempo de ejecución

```Typescript
enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = "customer",
  USER = 'user',
}

type User = {
  username: string
  role : ROLES
}

const yakeUser:User = {
  username: 'Yake',
  role: ROLES.ADMIN,
}
```
