# Dynamic Form React App

Esta es una aplicación de formulario dinámico construida con React, TypeScript y estilos responsivos para una experiencia de usuario óptima en una variedad de dispositivos.

## Funcionalidades

- Crea formularios dinámicos basados en una configuración proporcionada.
- Admite varios tipos de campos, como texto, número y select.
- Captura y muestra los datos enviados por el usuario.
- Diseño responsivo con consultas de medios para adaptarse a dispositivos móviles y pantallas más grandes.

## Cómo usar

1. Clona este repositorio en tu máquina local:

`git clone https://github.com/tu-usuario/dynamic-form-react.git`

2. Navega al directorio del proyecto:

`cd dynamic-form-react`

3. Instala las dependencias:

`npm install`

4. Ejecuta la aplicación:

`npm start`

La aplicación se abrirá en tu navegador predeterminado. Puedes editar el archivo `src/App.tsx` para personalizar la configuración del formulario.

## Configuración del formulario

La configuración del formulario se define en el archivo `src/App.tsx`. Puedes modificar el arreglo `fields` para definir los campos de tu formulario.

```tsx
const fields: FormField[] = [
{ type: 'text', label: 'Nombre' },
{ type: 'number', label: 'Edad' },
{ type: 'select', label: 'Género', options: ['Masculino', 'Femenino', 'Otro'] },
];

```
## Personalización de estilos

Los estilos de la aplicación se encuentran en el archivo `src/App.css`. Puedes personalizar los estilos según tus preferencias.