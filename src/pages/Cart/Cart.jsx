import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import { increaseQuantity, decreaseQuantity } from "../../store/cartSlice";
import { clearCart } from "../../store/cartSlice";
import { getProductTitle } from "../../services/productTranslations";
import Modal from "../../components/Modal/Modal";
import "./Cart.css";

function Cart() {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(null); // "delete" | "clear"
    const [selectedId, setSelectedId] = useState(null);

    const handleConfirm = () => {
        if (modalType === "delete") {
            dispatch(removeFromCart(selectedId));
        }

        if (modalType === "clear") {
            dispatch(clearCart());
        }

        setShowModal(false);
        setSelectedId(null);
        setModalType(null);
    };

    return (
        <div className="cart">
            <div className="cart-header">
                <p className="cart-label">Resumen de compra</p>
                <h2>Carrito</h2>
                <p>Revisa tus productos, ajusta cantidades o elimina los que no quieras comprar.</p>
            </div>

            {items.length === 0 ? (
                <div className="empty-cart">
                    <h3>El carrito esta vacio</h3>
                    <p>Agrega productos desde el catalogo para verlos aca.</p>
                    <Link to="/">Ver productos</Link>
                </div>
            ) : (
                <>
                    <div className="cart-list">
                        {items.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-product">
                                    <h3>{getProductTitle(item)}</h3>
                                    <p>Precio unitario: ${item.price}</p>
                                </div>

                                <div className="quantity-control">
                                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                                        -
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button onClick={() => dispatch(increaseQuantity(item.id))}>
                                        +
                                    </button>
                                </div>

                                <p className="cart-subtotal">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>

                                <button
                                    className="delete-btn"
                                    onClick={() => {
                                        setSelectedId(item.id);
                                        setModalType("delete");
                                        setShowModal(true);
                                    }}
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <span>Total</span>
                        <strong>${totalPrice.toFixed(2)}</strong>

                        <button
                            className="clear-btn"
                            onClick={() => {
                                setModalType("clear");
                                setShowModal(true);
                            }}
                        >
                            Vaciar carrito
                        </button>
                    </div>
                </>
            )}

            {showModal && (
                <Modal
                    message={
                        modalType === "delete"
                            ? "¿Eliminar este producto?"
                            : "¿Vaciar todo el carrito?"
                    }
                    onConfirm={handleConfirm}
                    onCancel={() => {
                        setShowModal(false);
                        setSelectedId(null);
                        setModalType(null);
                    }}
                />
            )}
        </div>
    );
}

export default Cart;
