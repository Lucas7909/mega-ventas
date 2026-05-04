import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import { increaseQuantity, decreaseQuantity } from "../../store/cartSlice";
import { clearCart } from "../../store/cartSlice";
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
            <h2>Carrito</h2>

            {items.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (

                items.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                        <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                        <div>
                            <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                                -
                            </button>

                            <span>{item.quantity}</span>

                            <button onClick={() => dispatch(increaseQuantity(item.id))}>
                                +
                            </button>
                        </div>


                        <button
                            onClick={() => {
                                setSelectedId(item.id);
                                setModalType("delete");
                                setShowModal(true);
                            }}
                        >
                            Eliminar
                        </button>
                    </div>
                ))
            )}

            {items.length > 0 && (
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
            )}

            <button
                className="clear-btn"
                onClick={() => {
                    setModalType("clear");
                    setShowModal(true);
                }}
            >
                Vaciar carrito
            </button>

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