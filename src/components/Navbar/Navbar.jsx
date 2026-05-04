import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar() {
    const items = useSelector((state) => state.cart.items);

    const totalItems = items.reduce(
        (acc, item) => acc + item.quantity,
        0
    );

    return (
        <div className="navbar">
            <Link to="/" className="logo">
                MV
            </Link>

            <div className="cart-info">
                <Link to="/">Productos</Link>
                <Link to="/about">Acerca de</Link>
                <Link to="/contact">Contacto</Link>
                <Link to="/cart">🛒 ({totalItems})</Link>
            </div>
        </div>
    );
}

export default Navbar;