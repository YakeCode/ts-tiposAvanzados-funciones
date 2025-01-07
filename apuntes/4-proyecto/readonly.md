# Readonly

Se utiliza para especialmente cuando necesitamos que los datos sean solo de lectura por ejemplo para generar una busqueda

```Typescript

export interface FindProduct extends Readonly<Partial<Product>> {}
```

En este caso utilizamos Partial para que todos los campos sean opcionales, y readondly hace que todos los campos sean de lectura
