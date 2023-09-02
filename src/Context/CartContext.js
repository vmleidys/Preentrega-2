import {createContext, useState} from "react"

export const CartContext = createContext({
    cart:[]
})

export const CartProvider = ({ children }) => {
    const[cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isIncart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error("Producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    const isIncart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext