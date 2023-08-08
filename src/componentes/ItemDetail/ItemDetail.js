import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, image, category, description, price, stock}) => {
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
             <ItemCount initial={1} stock={stock} onAdd={(quantity) =>console.log("Agreado" ,quantity)}/>
                
             </footer>
       </article>
    )
}

export default ItemDetail