# Mega Ventas

Aplicacion web de tienda online desarrollada con React, Vite y Redux Toolkit.

## Demo

https://Lucas7909.github.io/mega-ventas

## Objetivo

El proyecto permite explorar productos obtenidos desde una API externa, buscar y filtrar por categoria, consultar el detalle de cada producto y gestionar un carrito de compras con estado global. La interfaz muestra los productos en español para ofrecer una experiencia mas clara al usuario.

## Funcionalidades

- Listado de productos desde DummyJSON.
- Busqueda por texto.
- Filtro por categorias.
- Nombres, descripciones y categorias traducidas al español.
- Vista de detalle de producto por ruta dinamica.
- Galeria de imagenes interactiva en el detalle.
- Navegacion anterior/siguiente entre productos.
- Carrito de compras con Redux Toolkit.
- Incremento y decremento de cantidades.
- Eliminacion de productos y vaciado del carrito.
- Modal de confirmacion.
- Navegacion con React Router.
- Paginas de contacto, acerca de y 404.
- Deploy en GitHub Pages.

## Tecnologias usadas

- React
- Vite
- JavaScript
- Redux Toolkit
- React Redux
- React Router
- CSS

## Estructura del proyecto

```text
src/
  assets/
  components/
  pages/
  services/
  store/
```

## Rutas principales

- `/`: catalogo de productos.
- `/products/:id`: detalle de producto.
- `/cart`: carrito de compras.
- `/about`: informacion del proyecto.
- `/contact`: contacto.

## Como ejecutar el proyecto

```bash
npm install
npm run dev
```

La aplicacion se abre en el puerto que indique Vite en la terminal.

## Build de produccion

```bash
npm run build
```

## Deploy

El deploy se realiza en GitHub Pages con:

```bash
npm run deploy
```

Este comando ejecuta primero el build de produccion y luego publica la carpeta `dist`.

## Autor

Lucas Maximiliano Sanchez
