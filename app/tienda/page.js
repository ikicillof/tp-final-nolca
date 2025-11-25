"use client"

import styles from "@/styles/tienda.module.scss";
import Product from "@/componentes/product";
import { useEffect, useMemo, useState } from "react";


export const products = [
    {
        id: "1",
        name: "Chocolate 70% cacao",
        image: "/images/tienda1.png",
        description: "Chocolate semiamargo intenso",
        costo: 3000
    },
    {
        id: "2",
        name: "Chocolate 80% cacao",
        image: "/images/tienda2.png",
        description: "Chocolate amargo con notas profundas",
        costo: 3200
    },
    {
        id: "3",
        name: "Chocolate 90% cacao",
        image: "/images/tienda3.png",
        description: "Chocolate extra amargo y robusto",
        costo: 3500
    },
    {
        id: "4",
        name: "Chocolate 100% cacao",
        image: "/images/tienda4.png",
        description: "Cacao puro sin azúcar",
        costo: 4200
    },
    {
        id: "5",
        name: "Chocolate con Almendras",
        image: "/images/tienda5.png",
        description: "Pedazos crocantes de sabor más el amargor del chocolate",
        costo: 5500
    },
    {
        id: "6",
        name: "Chocolate con naranja",
        image: "/images/tienda6.png",
        description: "Mezcla de notas cítricas con el dulzor del chocolate",
        costo: 5000
    },
    {
        id: "7",
        name: "Bombones surtidos",
        image: "/images/tienda7.png",
        description: "Selección de bombones artesanales",
        costo: 4800
    },
    {
        id: "8",
        name: "Bombones rellenos",
        image: "/images/tienda8.png",
        description: "Bombones con relleno cremoso tradicional",
        costo: 3500
    },
    {
        id: "9",
        name: "Chocolate con almendras",
        image: "/images/tienda9.png",
        description: "Chocolate con almendras tostadas",
        costo: 3600
    },
    {
        id: "10",
        name: "Alfajor de brownie",
        image: "/images/tienda10.png",
        description: "Dulce, suave y espojoso alfajor artesanal",
        costo: 3200
    },
    {
        id: "11",
        name: "Bolsa de café 500g",
        image: "/images/tienda11.png",
        description: "Cosechado de los mejores campos de Brasil",
        costo: 2800
    },
    {
        id: "12",
        name: "Café molido 200g",
        image: "/images/tienda12.png",
        description: "Café molido de la mejor calidad, proveniente de los campos del Paraguay",
        costo: 2500
    },
    {
        id: "13",
        name: "Bolsa de café 200g",
        image: "/images/tienda13.png",
        description: "Cosechado de los mejores campos de Brasil",
        costo: 3000
    },
    {
        id: "14",
        name: "Café helado",
        image: "/images/tienda14.png",
        description: "Fresca dulce, perfecta para el verano",
        costo: 2900
    },
    {
        id: "15",
        name: "Latte",
        image: "/images/tienda15.png",
        description: "Mezcla de la amargura del cafe con la dulzura de la leche",
        costo: 4200
    },
    {
        id: "16",
        name: "Café molido 500g",
        image: "/images/tienda16.png",
        description: "Café molido de los mejores campos de Argentina",
        costo: 2100
    },
    {
        id: "17",
        name: "Chocolate blanco Dubai",
        image: "/images/tienda17.png",
        description: "Tiene trozos de pistachos mezclados en el chocolate",
        costo: 2300
    },
    {
        id: "18",
        name: "Mani bañado",
        image: "/images/tienda18.png",
        description: "Crocante mani cubierto con chocolate belga de la mejor calidad",
        costo: 1900
    },
    {
        id: "19",
        name: "Mix de bombones",
        image: "/images/tienda19.png",
        description: "El regalo perfecto para cualquier situación, 12 variedades de bombones distintas  y cada uno con su toque especial",
        costo: 3800
    },
    {
        id: "20",
        name: "Combo Nolca",
        image: "/images/tienda20.png",
        description: "Una bolsa de cafe de 200g de los campos Argentinos sumado con una tableta de chocolate sorpresa",
        costo: 4000
    }
]





export default function Tienda () {

    const [busqueda, setBusqueda] = useState("")

    const resultados = useMemo(() => {
        return products.filter(product => product.name.toLowerCase().indexOf(busqueda.toLowerCase())!== -1)
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
                    <a href="/carrito"><span className="material-symbols-outlined">shopping_cart</span>{cantidad !== 0 && <p> {cantidad} </p>}</a>
                </section>

            </div>
            <h1>Tienda</h1>
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
