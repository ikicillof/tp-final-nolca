"use client"

import styles from "@/styles/tienda.module.scss";
import Product from "@/componentes/product";
import { useEffect, useMemo, useState } from "react";


export const products = [
    {
        id: "1",
        name: "Chocolate 70% cacao",
        image: "/images/tienda1.png",
        description: "Chocolate amargo intenso",
        open: false,
        costo: 3000
    },
    {
        id: "2",
        name: "Chocolate 80% cacao",
        image: "/images/tienda2.png",
        description: "Chocolate extra amargo",
        open: false,
        costo: 3200
    },
    {
        id: "3",
        name: "Chocolate 90% cacao",
        image: "/images/tienda3.png",
        description: "Chocolate ultra amargo",
        open: false,
        costo: 3500
    },
    {
        id: "4",
        name: "Chocolate 100% cacao",
        image: "/images/tienda4.png",
        description: "Puro cacao sin azúcar",
        open: false,
        costo: 4200
    },
    {
        id: "5",
        name: "Café en grano Colombia",
        image: "/images/tienda5.png",
        description: "Café suave de origen colombiano",
        open: false,
        costo: 5500
    },
    {
        id: "6",
        name: "Café en grano Brasil",
        image: "/images/tienda6.png",
        description: "Café tostado medio con notas achocolatadas",
        open: false,
        costo: 5000
    },
    {
        id: "7",
        name: "Café molido Intenso",
        image: "/images/tienda7.png",
        description: "Sabor fuerte y aromático",
        open: false,
        costo: 4800
    },
    {
        id: "8",
        name: "Bombones surtidos",
        image: "/images/tienda8.png",
        description: "Selección de bombones artesanales",
        open: false,
        costo: 3500
    },
    {
        id: "9",
        name: "Bombones rellenos de dulce de leche",
        image: "/images/tienda9.png",
        description: "Relleno cremoso tradicional",
        open: false,
        costo: 3600
    },
    {
        id: "10",
        name: "Tableta de chocolate con almendras",
        image: "/images/tienda10.png",
        description: "Chocolate con almendras tostadas",
        open: false,
        costo: 3200
    },
    {
        id: "11",
        name: "Tableta de chocolate con maní",
        image: "/images/tienda11.png",
        description: "Chocolate con maní crocante",
        open: false,
        costo: 2800
    },
    {
        id: "12",
        name: "Chocolate blanco",
        image: "/images/tienda12.png",
        description: "Dulce y cremoso",
        open: false,
        costo: 2500
    },
    {
        id: "13",
        name: "Chocolate con cookies",
        image: "/images/tienda13.png",
        description: "Tableta con trozos de galleta",
        open: false,
        costo: 3000
    },
    {
        id: "14",
        name: "Chocolate con pasas",
        image: "/images/tienda14.png",
        description: "Tableta con pasas de uva",
        open: false,
        costo: 2900
    },
    {
        id: "15",
        name: "Café instantáneo premium",
        image: "/images/tienda15.png",
        description: "Café soluble de alta calidad",
        open: false,
        costo: 4200
    },
    {
        id: "16",
        name: "Café frío Latte",
        image: "/images/tienda16.png",
        description: "Bebida fría sabor latte",
        open: false,
        costo: 2100
    },
    {
        id: "17",
        name: "Café frío Mocca",
        image: "/images/tienda17.png",
        description: "Bebida fría con chocolate",
        open: false,
        costo: 2300
    },
    {
        id: "18",
        name: "Chocolate caliente instantáneo",
        image: "/images/tienda18.png",
        description: "Polvo para preparar chocolate caliente",
        open: false,
        costo: 1900
    },
    {
        id: "19",
        name: "Mix de frutos secos con chocolate",
        image: "/images/tienda19.png",
        description: "Nueces, almendras y chocolate",
        open: false,
        costo: 3800
    },
    {
        id: "20",
        name: "Bombones de trufa",
        image: "/images/tienda20.png",
        description: "Bombones rellenos de ganache",
        open: false,
        costo: 4000
    }
]




export default function Tienda () {

    const [busqueda, setBusqueda] = useState("")

    const resultados = useMemo(() => {
        return products.filter(product => product.name.indexOf(busqueda)!== -1)
    }, [busqueda])

    const [carrito, setCarrito] = useState({})
    // parce transforma un string en un objeto y stringify un objeto en un string
    // devuelve una variable de estado y la funcion para actualizarlo
    const cantidad = useMemo(() => Object.values(carrito).reduce((acumulador, item) => acumulador + item, 0), [carrito])
    // se ejecuta cada vez que cambia carrito
    useEffect(() => {
        setCarrito(JSON.parse(localStorage.getItem("carrito") ?? "{}"))
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
    console.log({busqueda})
    return (
        <div className={styles.prinsipal}> 
            <div className={styles.barraNav}>
                <section className={styles.buscador}>
                    <span className="material-symbols-outlined">search</span>
                    <input value={busqueda} onChange={e => setBusqueda(e.target.value)} type="search" placeholder="Buscá productos..."/>
                </section>
                <section className={styles.carrito}>
                    <a href="/carrito"><span className="material-symbols-outlined">shopping_cart</span></a>
                    {
                        cantidad !== 0 && <p> {cantidad} </p>
                    }
                </section>

            </div>
            <div className={styles.tienda}>
               
                    {
                        resultados.length ? (
                             <ul>
                                {resultados.map((product, i) => <li key={i}><Product onChange={onChange} id={product.id} name={product.name} image={product.image} description={product.description} cantidad={carrito[product.id]} costo={product.costo}/></li>)}               
                            </ul>
                        ) : (
                            <p className={styles.noResultado}>No hay resultados para tu busqueda</p>
                        )
                    }
            </div>
        </div>
    )
}