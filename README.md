# Mega Ventas

Aplicacion web de e-commerce desarrollada con React, Vite y Redux Toolkit.

## Demo

https://Lucas7909.github.io/mega-ventas

## Objetivo

El proyecto permite explorar productos obtenidos desde una API externa, buscar y filtrar por categoria, consultar el detalle de cada producto y gestionar un carrito de compras con estado global.

## Funcionalidades

- Listado de productos desde DummyJSON.
- Busqueda por texto.
- Filtro por categorias.
- Vista de detalle de producto.
- Carrito de compras con Redux Toolkit.
- Incremento y decremento de cantidades.
- Eliminacion de productos y vaciado del carrito.
- Modal de confirmacion.
- Navegacion con React Router.
- Paginas de contacto, acerca de y 404.

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

## Como ejecutar el proyecto

```bash
npm install
npm run dev
```

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
