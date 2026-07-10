import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { getProductById } from "../../services/productsService";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    // Depende del id porque debe pedir un producto nuevo si cambia la ruta.
    getProductById(id)
      .then((data) => setProduct(data))
      .catch(() => setError("Error al cargar el detalle del producto"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="detail-status">Cargando detalle...</p>;
  if (error) return <p className="detail-status">{error}</p>;
  if (!product) return <p className="detail-status">Producto no encontrado</p>;

  return (
    <div className="product-detail">
      <Link className="back-link" to="/">
        Volver a productos
      </Link>

      <div className="detail-layout">
        <div className="detail-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className="detail-info">
          <p className="detail-category">{product.category}</p>
          <h1>{product.title}</h1>
          <p className="detail-description">{product.description}</p>

          <div className="detail-data">
            <span>Precio: ${product.price}</span>
            <span>Stock: {product.stock}</span>
            <span>Rating: {product.rating}</span>
          </div>

          <button
            onClick={() => {
              dispatch(addToCart(product));
              setAdded(true);
              setTimeout(() => setAdded(false), 1500);
            }}
          >
            Agregar al carrito
          </button>

          {added && <p className="added-message">Producto agregado</p>}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
