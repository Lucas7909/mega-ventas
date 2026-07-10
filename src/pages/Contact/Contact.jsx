import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <p className="contact-label">Atencion al cliente</p>
        <h2>Contacto</h2>
        <p>
          Escribinos por consultas sobre productos, disponibilidad o compras.
          Te respondemos lo antes posible.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <article className="contact-card">
            <span>Email</span>
            <strong>contacto@megaventas.com</strong>
          </article>

          <article className="contact-card">
            <span>Telefono</span>
            <strong>291-1234567</strong>
          </article>

          <article className="contact-card">
            <span>Horario</span>
            <strong>Lunes a viernes, 9 a 18 hs</strong>
          </article>

          <article className="contact-card">
            <span>Ubicacion</span>
            <strong>Bahia Blanca, Buenos Aires</strong>
          </article>
        </div>

        <form className="contact-form">
          <label>
            Nombre
            <input type="text" placeholder="Tu nombre" />
          </label>

          <label>
            Email
            <input type="email" placeholder="tuemail@ejemplo.com" />
          </label>

          <label>
            Mensaje
            <textarea placeholder="Contanos en que podemos ayudarte" rows="5" />
          </label>

          <button type="button">Enviar consulta</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
