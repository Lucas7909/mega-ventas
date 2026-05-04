import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>Página no encontrada</p>

      <Link to="/" className="back-btn">
        Volver al inicio
      </Link>

    </div>
  );
}

export default NotFound;