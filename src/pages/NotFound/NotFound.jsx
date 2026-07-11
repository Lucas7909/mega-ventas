import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-card">
        <p className="not-found-label">Error 404</p>
        <h2>Pagina no encontrada</h2>
        <p>
          La ruta que intentaste abrir no existe o fue movida. Podes volver al
          catalogo para seguir navegando por Mega Ventas.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="back-btn">
            Volver al catalogo
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contacto
          </Link>
        </div>
      </div>

    </div>
  );
}

export default NotFound;
