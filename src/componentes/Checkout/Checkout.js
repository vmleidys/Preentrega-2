import React, {useContext, useState, useEffect} from "react" ;

import { db } from "../../services/firebase/firebaseConfig" ;
import {CheckoutForm} from "../CheckoutForm/CheckoutForm" ;
import { CartContext } from "../../Context/CartContext" ;
import { collection, writeBatch } from "firebase/firestore" ;
import {getDocs, query, where, Timestamp, addDoc, documentId } from "firebase/firestore";
import Swal from 'sweetalert2'

export const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")

    const{ cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email}) => {
        setLoading(true)

        try {
            const objOrder ={
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            const bath = writeBatch(db)

            const outOfStock =[]

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, "products")

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productsAddedToCart = cart.find(prod => prod.id === doc.id )
                const prodQuantity = productsAddedToCart?.quantity
                
                if(stockDb >= prodQuantity) {
                    bath.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            });

            if(outOfStock.length === 0) {
                await bath.commit()

                const orderRef = collection(db, "orders")

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }else {
                console.error("hay productos que se encuentran agotados")
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

const redirectToInicio = () => {
    window.location.href = '/';

}
useEffect(() => {
    if (!loading && orderId) {
        Swal.fire({
            title: "SU PEDIDO HA SIDO TOMADO",
            text: `EL ID DE SU PEDIDO ES : ${orderId}`,
            icon: "success",
            confirmButtonText: "VOLVER AL INICIO",
            customClass: {
                confirmButton: "button is-success is-rounded"
            },
            onClose: () => {
                redirectToInicio();
            }
        });
    } else if (loading) {
        Swal.fire({
            title: "GENERANDO SU PEDIDO",
            text: "ESTAMOS GENERANDO SU ID, POR FAVOR ESPERE",
            allowOutsideClick: false,
            customClass: {
                confirmButton: "button is-success is-rounded"
            },
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });
    }
}, [loading, orderId]);

return (
    <div>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm={createOrder} />
    </div>
)
}

export default Checkout;