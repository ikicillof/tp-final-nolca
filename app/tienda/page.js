"use client"

import styles from "@/styles/tienda.module.scss";
import Product from "@/componentes/product";
import { useEffect, useMemo, useState } from "react";


export const products = [
    {
        id: "1", 
        name: "chocolate 70%", 
        image: "/images/almendras.jpg", 
        description: "chocolate amargo",
        open: false,
        costo: 3000 
    }, 
    {
        id: "2",
        name: "chocolate 80%", 
        image: "/images/almendras.jpg", 
        description: "chocolate amargo",
        open: false,
        costo: 1000
    }, 
    {
        id: "3",
        name: "chocolate 90%", 
        image: "/images/almendras.jpg", 
        description: "chocolate amargo",
        open: false, 
        costo: 5000
    }, 
    {
        id: "4",
        name: "chocolate 100%", 
        image: "/images/almendras.jpg", 
        description: "chocolate amargo",
        open: false, 
        costo: 1200
    }
]


export default function Tienda () {

    const [carrito, setCarrito] = useState({})
    // parce transforma un string en un objeto y stringify un objeto en un string
    // devuelve una variable de estado y la funcion para actualizarlo
    const cantidad = useMemo(() => Object.values(carrito).reduce((acumulador, item) => acumulador + item, 0), [carrito])
    // se ejecuta cada vez que cambia carrito
    useEffect(() => {
        setCarrito(JSON.parse(localStorage.getItem("carrito")))
    }, [])

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
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

    return (
        <div className={styles.prinsipal}> 
            <div className={styles.barraNav}>
                <section className={styles.buscador}>
                    <input type="search" placeholder="Buscá productos..."/>
                    <span className="material-symbols-outlined">search</span>
                </section>
                <section className={styles.carrito}>
                    <a href="/carrito"><span className="material-symbols-outlined">shopping_cart</span></a>
                    {
                        cantidad !== 0 && <p> {cantidad} </p>
                    }
                </section>

            </div>
            <div className={styles.tienda}>
                <ul>
                    {
                        products.map((product, i) => <li key={i}><Product onChange={onChange} id={product.id} name={product.name} image={product.image} description={product.description} cantidad={carrito[product.id]} costo={product.costo}/></li>)                
                    }
                </ul>
            </div>
        </div>
    )
}