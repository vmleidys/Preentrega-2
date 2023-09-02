import "./CartWidget.css"
import cart from "./assets/cart.svg"
import { useContext } from "react"
import {CartContext} from "../../Context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { totalQuantity } = useContext

    return (
        <><Link to="/cart" className="CartWidget" style={{ display: totalQuantity > 0 ? "block" : "none" }}>
            <img className="CartItem" src="{cart}" alt="cart-wdiget" />
            {totalQuantity}
        </Link><div>
                <img src={cart} alt="cart-wdiget" />
                0
            </div></>           
    )
}

export default CartWidget