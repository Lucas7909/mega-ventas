import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../services/productsService";
import { getProductCategory, getProductTitle } from "../../services/productTranslations";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import "./Products.css";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [addedId, setAddedId] = useState(null);

    const handleCardKeyDown = (event, productId) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            navigate(`/products/${productId}`);
        }
    };

    const filteredProducts = products.filter((p) => {
        const matchSearch = getProductTitle(p)
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchCategory = category === "" || p.category === category;

        return matchSearch && matchCategory;
    });

    const categories = [...new Set(products.map(p => p.category))];

    useEffect(() => {
        // Se ejecuta solo al montar la vista porque la lista inicial no depende de filtros locales.
        getProducts()
            .then((data) => setProducts(data))
            .catch(() => setError("Error al cargar productos"))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            <section className="products-header">
                <p className="products-label">Catalogo</p>
                <h1>Mega Ventas</h1>
                <p>Explora productos, filtra por categoria y agregalos al carrito.</p>
            </section>

            <section className="filters">
                <label>
                    Buscar
                    <input
                        type="text"
                        placeholder="Buscar producto..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </label>

                <label>
                    Categoria
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Todas</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {getProductCategory(cat)}
                            </option>
                        ))}
                    </select>
                </label>
            </section>
            <div className="products-grid">
                {filteredProducts.length === 0 ? (
                    <p className="no-results">
                        No se encontraron productos
                        {search && ` para "${search}"`}
                    </p>
                ) : (

                    filteredProducts.map((p) => (
                        <div
                            className="product-card"
                            key={p.id}
                            role="button"
                            tabIndex="0"
                            onClick={() => navigate(`/products/${p.id}`)}
                            onKeyDown={(event) => handleCardKeyDown(event, p.id)}
                        >
                            <img src={p.thumbnail} width="120" />
                            <span className="product-category">{getProductCategory(p.category)}</span>
                            <h3>{getProductTitle(p)}</h3>
                            <p className="product-price">${p.price}</p>

                            <button
                                className="add-button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    dispatch(addToCart(p));
                                    setAddedId(p.id);
                                    setTimeout(() => setAddedId(null), 1500);
                                }}
                            >
                                Agregar
                            </button>
                            {addedId === p.id && <p className="added-badge">Agregado!</p>}

                        </div>
                    ))
                )}

            </div>
        </div>

    );
}

export default Products;
