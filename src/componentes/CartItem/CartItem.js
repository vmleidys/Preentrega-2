import  React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import "./CartItem.css"

export const CartItem = ({id, price, image, title, quantity}) => {

    const {removeItem, total} = useContext(CartContext)

    return (
        <article className= "CartItem">
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {title}
                </h2>
            </header>
            <picture>
                <image src={image} alt={title} className='Itemimage'/>
            </picture>
            <section>
                <h3 className='InfoCart'>
                    Precio: ${price}
                    </h3>
            </section>
           <section>
            <h4 className='InfoCart'>
                SubTotal: ${price * quantity}
                </h4>
                </section> 

            <section>
                <h3> Total a Pagar: ${total}</h3>
            </section>

            <section>
                <button className='btn btn-danger' onClick={() => removeItem(id)}> Eliminar</button>
            </section>
        </article>
    )

}
export default CartItem;
