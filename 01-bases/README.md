# SECCIÓN 1: Bases de React ⚛️

## ¿Qué es React?

React es una librería de JavaScript desarrollada por Facebook para construir interfaces de usuario (UI) de manera eficiente y reutilizable. React utiliza un paradigma basado en componentes, permitiendo que los desarrolladores creen interfaces complejas dividiendo la UI en pequeñas piezas reutilizables. Utiliza un Virtual DOM para optimizar el rendimiento, actualizando solo los elementos que han cambiado sin necesidad de recargar toda la página.

React es declarativo, lo que significa que describes cómo debería verse la interfaz y React se encarga de actualizar el DOM automáticamente cuando los datos cambian. También es basado en componentes, permitiendo crear componentes reutilizables que manejan su propio estado y lógica.

Consulta la [documentación oficial de React](https://react.dev/es) para más información.

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

# 2. Tipos de datos en TypeScript

## Tipos de datos basicos

TypeScript proporciona varios tipos de datos fundamentales para asegurar la seguridad de tipos en tus aplicaciones:

- **string**: Representa cadenas de texto. Ejemplo: `'John Doe'`
- **number**: Representa valores numéricos. Ejemplo: `23`
- **boolean**: Representa valores de verdadero o falso. Ejemplo: `true`
- **arrays**: Representa colecciones de elementos del mismo tipo. Ejemplo: `string[]` para un array de strings como `['Velocidad', 'Volar', 'Respirar en el agua']`

Estos tipos básicos te permiten escribir código más seguro y predecible, evitando errores comunes en tiempo de compilación. TypeScript verificará automáticamente que los valores asignados coincidan con el tipo declarado, proporcionando mejor autocompletado y detección de errores en tu editor de código.
