"use client"

import styles from "@/styles/carrito.module.scss"
import ProductText from "@/componentes/productText"
import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { products } from "../tienda/page"


export default function () {

    const router = useRouter()
    const [carrito, setCarrito] = useState({})

    useEffect(() => {
        setCarrito(JSON.parse(localStorage.getItem("carrito") ?? "{}"))
    }, [])

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    const total = useMemo(() => 
        products.reduce(
            (acumulador, product) => acumulador + product.costo * (carrito[product.id] ?? 0),
            0
        )
    , [carrito])

    const lista = useMemo(() => {
        const ids = Object.keys(carrito)
        return products.filter(product => ids.includes(product.id) && carrito[product.id] > 0)
    }, [carrito])

    function onChange(id, cantidad) {
        setCarrito((oldCarrito) => ({
            ...oldCarrito,
            [id]: cantidad
        }))
    }

    function finalizarCompra() {
        setCarrito({})
        localStorage.setItem("carrito", "{}")
        router.push("/gracias")     // podés usar la ruta que quieras
    }

    return (
        <div className={styles.principal}>
            {
                lista.length ? (
                    <>
                        <h1>Carrito</h1>
                        <div className={styles.carrito}>
                            <div className={styles.header}>
                                <div>Producto</div>
                                <div>Precio</div>
                                <div>Cantidad</div>
                                <div>Importe</div>
                            </div>
                            
                            {lista.map((product, i) => (
                                <ProductText 
                                    key={i} 
                                    onChange={onChange}
                                    id={product.id}
                                    image={product.image}
                                    name={product.name}
                                    costo={product.costo}
                                    cantidad={carrito[product.id]}
                                />
                            ))}

                            <h3 className={styles.total}>Total: ${total}</h3>
                        </div>

                        <button className={styles.compra} onClick={finalizarCompra}>
                            Compra
                        </button>
                    </>
                ) : (
                    <div className={styles.carritoVacio}>
                        <h1>Carrito</h1>
                        <p>Carrito vacío</p>
                        <a href="/tienda">Volver a la tienda</a>
                    </div>
                )
            }
        </div>
    )
}
