import "./About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-header">
        <p className="about-label">Sobre el proyecto</p>
        <h2>Mega Ventas</h2>
        <p>
          Una tienda online creada con React para explorar productos, consultar
          detalles en español y administrar un carrito de compras de forma simple.
        </p>
      </section>

      <section className="about-content">
        <article className="about-main">
          <h3>Objetivo</h3>
          <p>
            El proyecto integra navegacion entre vistas, consumo de una API
            externa, manejo de estados de carga y error, filtros de productos y
            estado global con Redux Toolkit para compartir el carrito entre
            distintas pantallas.
          </p>
          <p>
            La idea es simular una experiencia basica de tienda online, donde el
            usuario puede buscar productos, abrir su detalle, agregarlos al
            carrito y modificar las cantidades antes de comprar.
          </p>
        </article>

        <div className="about-side">
          <article className="about-card">
            <span>API</span>
            <strong>DummyJSON Products</strong>
          </article>

          <article className="about-card">
            <span>Estado global</span>
            <strong>Redux Toolkit</strong>
          </article>

          <article className="about-card">
            <span>Navegacion</span>
            <strong>React Router</strong>
          </article>
        </div>
      </section>

      <section className="about-features">
        <article>
          <h3>Productos dinamicos</h3>
          <p>El listado se carga desde una API y permite buscar o filtrar por categoria.</p>
        </article>

        <article>
          <h3>Detalle de producto</h3>
          <p>Cada tarjeta abre una vista con descripcion, precio, stock y calificacion.</p>
        </article>

        <article>
          <h3>Carrito compartido</h3>
          <p>El carrito se actualiza desde distintas vistas usando estado global.</p>
        </article>
      </section>
    </div>
  );
}

export default About;
