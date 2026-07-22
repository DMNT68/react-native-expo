# SECCIÓN 1: Bases de React

## ¿Qué es React?

React es una librería de JavaScript desarrollada por Facebook para construir interfaces de usuario (UI) de manera eficiente y reutilizable. React utiliza un paradigma basado en componentes, permitiendo que los desarrolladores creen interfaces complejas dividiendo la UI en pequeñas piezas reutilizables. Utiliza un Virtual DOM para optimizar el rendimiento, actualizando solo los elementos que han cambiado sin necesidad de recargar toda la página.

React es declarativo, lo que significa que describes cómo debería verse la interfaz y React se encarga de actualizar el DOM automáticamente cuando los datos cambian. También es basado en componentes, permitiendo crear componentes reutilizables que manejan su propio estado y lógica.

Consulta la [documentación oficial de React](https://react.dev/learn) para más información.

<br>

# 1. Estructura de un proyecto de React

Un proyecto típico de React (con Vite) tiene la siguiente estructura de carpetas y archivos principales:

```text
/
├── public/
│   └── (archivos estáticos: imágenes, favicon, etc.)
├── src/
│   ├── assets/
│   │   └── (recursos estáticos como imágenes, fuentes, etc.)
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
├── .gitignore
└── eslint.config.js
```

Explicación de cada archivo y directorio:

- **public/**: Carpeta para archivos estáticos que se sirven tal cual (imágenes, favicon, robots.txt, etc.).
- **src/**: Contiene todo el código fuente del proyecto.
- **assets/**: Carpeta dentro de src para recursos estáticos como imágenes, fuentes y otros archivos multimedia.
- **App.tsx**: Componente principal de la aplicación. Es el componente raíz donde se define la estructura general de la app.
- **App.css**: Estilos CSS para el componente App.
- **index.css**: Estilos globales de la aplicación.
- **main.tsx**: Punto de entrada de la aplicación. Aquí se monta el componente App en el DOM.
- **index.html**: Archivo HTML principal. Contiene el elemento root donde React monta la aplicación.
- **vite.config.ts**: Archivo de configuración de Vite (bundler y dev server).
- **tsconfig.json**: Configuración de TypeScript.
- **package.json**: Define dependencias, scripts y metadatos del proyecto.
- **pnpm-lock.yaml**: Archivo de bloqueo de dependencias (específico de pnpm).
- **.gitignore**: Lista de archivos y carpetas que Git debe ignorar.
- **eslint.config.js**: Configuración de ESLint para linting del código.

# 2. TypeScript

TypeScript es un superset de JavaScript que añade tipado estático opcional y herramientas de comprobación en tiempo de desarrollo. Al usar TypeScript con React se obtiene mayor seguridad de tipos en componentes, props y estados, mejor autocompletado en el editor y detección temprana de errores. Esto facilita el mantenimiento y escalabilidad de aplicaciones React, especialmente en proyectos grandes o colaborativos.

## Tipos de datos básicos

TypeScript proporciona varios tipos de datos fundamentales para asegurar la seguridad de tipos en tus aplicaciones:

- **string**: Representa cadenas de texto. Ejemplo: `'John Doe'`
- **number**: Representa valores numéricos. Ejemplo: `23`
- **boolean**: Representa valores de verdadero o falso. Ejemplo: `true`
- **arrays**: Representa colecciones de elementos del mismo tipo. Ejemplo: `string[]` para un array de strings como `['Velocidad', 'Volar', 'Respirar en el agua']`

Estos tipos básicos te permiten escribir código más seguro y predecible, evitando errores comunes en tiempo de compilación. TypeScript verificará automáticamente que los valores asignados coincidan con el tipo declarado, proporcionando mejor autocompletado y detección de errores en tu editor de código.

## Objetos literales e interfaces

En TypeScript, los objetos literales son estructuras de datos definidas directamente con llaves y propiedades, por ejemplo:

```ts
const persona = {
  nombre: 'Ana',
  edad: 28,
  activo: true,
};
```

Las interfaces permiten describir la forma de un objeto de manera explícita y reutilizable. Con ellas se definen las propiedades y sus tipos, lo que ayuda a evitar errores y mantener el código más claro:

```ts
interface Usuario {
  nombre: string;
  edad: number;
  activo: boolean;
}

const usuario: Usuario = {
  nombre: 'Ana',
  edad: 28,
  activo: true,
};
```

Usar interfaces con objetos literales ofrece ventajas como autocompletado, validación de tipos y mayor mantenimiento cuando se trabaja con estructuras de datos complejas.

## Funciones, retorno y argumentos
En TypeScript, las funciones son bloques de código reutilizables que permiten organizar la lógica de una aplicación. Una función puede recibir datos mediante argumentos y, opcionalmente, devolver un resultado mediante un retorno. Las funciones pueden tiparse explícitamente especificando los tipos de sus argumentos y el tipo del valor retornado. Esto mejora la seguridad y claridad del código:

```ts
const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
};
```

En este ejemplo:
- **Argumentos**: `a` y `b` son de tipo `number`, lo que asegura que solo se puedan pasar números.
- **Tipo de retorno**: `: number` indica que la función siempre retorna un número.

Esta tipificación permite que TypeScript valide que los argumentos pasados sean correctos y que el retorno sea del tipo esperado. Al llamar la función, obtenemos autocompletado y validación de tipos:

```ts
addTwoNumbers(1, 2); // Correcto, retorna 3
addTwoNumbers('1', 2); // Error: el argumento debe ser number, no string
```

Las funciones tipadas son especialmente útiles en componentes React, donde se pueden reutilizar en diferentes contextos con la seguridad de que los datos serán del tipo correcto.

# 3. Hook - useState
`useState` es un hook que permite añadir estado local a componentes funcionales. Acepta el valor inicial y devuelve un par: el valor actual y una función para actualizarlo. A continuación un ejemplo y una breve explicación de cómo tiparlo con genéricos:

```tsx
import { useState } from 'react';

export const Counter = () => {
  // Se usa el genérico <number> para indicar que el estado 'count' es de tipo number
  const [count, setCount] = useState<number>(0);

  const increaseBy = (value: number) => {
    setCount(count + value);
  };

  return (
    <>
      <h3>
        Contador: <small>{count}</small>
      </h3>
      <div>
        <button onClick={() => increaseBy(-1)}>-1</button>
        &nbsp;
        <button onClick={() => increaseBy(1)}>+1</button>
      </div>
    </>
  );
};
```

Puntos clave:
- El genérico de useState (<T>) fuerza el tipo del estado; aquí useState<number>(0) asegura que count sea number.
- setCount acepta sólo valores compatibles con el tipo declarado (number), evitando errores en tiempo de compilación.
- También se puede inicializar con null y combinar con unión de tipos: useState<MyType | null>(null) cuando el estado puede ser nulo.




