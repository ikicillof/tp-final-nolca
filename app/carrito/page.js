"use client"

import styles from "@/styles/carrito.module.scss"
import ProductText from "@/componentes/productText"
import { useEffect, useMemo, useState } from "react"
import { products } from "../tienda/page"


export default function () {

    const [carrito, setCarrito] = useState({})

    useEffect(() => {
        setCarrito(JSON.parse(localStorage.getItem("carrito")))
    }, [])

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    const total = useMemo(() => products.reduce((acumulador, product) => acumulador + product.costo * (carrito[product.id] ?? 0), 0), [carrito])
    const lista = useMemo(() => {
       const ids = Object.keys(carrito)
       console.log({ids, products})
       return products.filter(product => ids.includes(product.id) && carrito[product.id] > 0)
    }, [carrito])

    function onChange(id, cantidad) {
    setCarrito((oldCarrito) => {
        return (
            {
                ...oldCarrito, 
                [id]: cantidad
            }
        )
    } )
    }
    console.log({carrito})
    return (
        <div className={styles.prinsipal}>
            <h2>Carrito</h2>
            <div className={styles.carrito}>
                <ul>
                {
                    lista.map((product, i) => <li key={i}><ProductText onChange={onChange} id={product.id} image={product.image} name={product.name} costo={product.costo} cantidad={carrito[product.id]}/></li>)
                }
                </ul>
            </div>

            <div className={styles.compra}>
                <button>Compra</button>
                <p>${total}</p>
                <input type="search" placeholder="Ingrese su cupón..." />
            </div>
        </div>
    )
}
