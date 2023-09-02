import "./ItemDetail.css"
import { useState, useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link, Router } from "react-router-dom"

import {CartContext} from "../../Context/CartContext"

const ItemDetail = ({id, name, image, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        
        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }
    return (
    <article classname= "CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {name}
            </h2>
        </header>
        <picture>
            <image src={image} alt = {name} className="ItemImage"/>
        </picture>

        <section>
            <p className="Info">
                Categoria: {category}
            </p>
            <p className="Info">
                Descripcion: {description}
            </p>
            <p className="Info">
            Precio: ${price}
            </p>
          </section>

             <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to= "/cart" classname= "Option" >Terminar la Compra</Link>
                    ) :(
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                
             </footer>
       </article>
    )
}

export default ItemDetail