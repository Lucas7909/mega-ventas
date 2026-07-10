import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { getProductById } from "../../services/productsService";
import {
  getProductCategory,
  getProductDescription,
  getProductTitle,
} from "../../services/productTranslations";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productId = Number(id);
  const previousProductId = productId > 1 ? productId - 1 : null;
  const nextProductId = productId < 24 ? productId + 1 : null;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [added, setAdded] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    // Depende del id porque debe pedir un producto nuevo si cambia la ruta.
    getProductById(id)
      .then((data) => {
        setProduct(data);
        setSelectedImage(data.thumbnail);
      })
      .catch(() => setError("Error al cargar el detalle del producto"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="detail-status">Cargando detalle...</p>;
  if (error) return <p className="detail-status">{error}</p>;
  if (!product) return <p className="detail-status">Producto no encontrado</p>;

  return (
    <div className="product-detail">
      {previousProductId && (
        <Link
          aria-label="Producto anterior"
          className="detail-arrow detail-arrow-left"
          to={`/products/${previousProductId}`}
        >
          ‹
        </Link>
      )}

      {nextProductId && (
        <Link
          aria-label="Producto siguiente"
          className="detail-arrow detail-arrow-right"
          to={`/products/${nextProductId}`}
        >
          ›
        </Link>
      )}

      <div className="detail-top">
        <Link className="back-link" to="/">
          Productos
        </Link>
        <span>/</span>
        <span>{getProductTitle(product)}</span>
      </div>

      <div className="detail-layout">
        <div className="detail-image">
          <img src={selectedImage} alt={getProductTitle(product)} />

          {product.images?.length > 1 && (
            <div className="detail-thumbs">
              {product.images.slice(0, 4).map((image) => (
                <button
                  className={selectedImage === image ? "thumb active-thumb" : "thumb"}
                  key={image}
                  onClick={() => setSelectedImage(image)}
                  type="button"
                >
                  <img src={image} alt={getProductTitle(product)} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="detail-info">
          <p className="detail-category">{getProductCategory(product.category)}</p>
          <h1>{getProductTitle(product)}</h1>
          <p className="detail-description">{getProductDescription(product)}</p>
          <p className="detail-price">${product.price}</p>

          <div className="detail-data">
            {product.brand && <span>Marca: {product.brand}</span>}
            <span>Stock: {product.stock}</span>
            <span>Calificacion: {product.rating} / 5</span>
            <span>Descuento: {product.discountPercentage}%</span>
          </div>

          <button
            className="detail-add-button"
            onClick={() => {
              dispatch(addToCart(product));
              setAdded(true);
              setTimeout(() => setAdded(false), 1500);
            }}
          >
            Agregar al carrito
          </button>

          {added && <p className="added-message">Producto agregado al carrito</p>}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
