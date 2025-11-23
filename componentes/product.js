"use client"

import styles from "@/styles/product.module.scss";

export default function Product ({image, name, description, open}) {
    console.log({image})
    return (
        <div className={styles.product} style={{ backgroundImage: `url(${image}`}}>
            <h3>{name}</h3>
            <section className={styles.infoCompra}>
                <p>3000$</p>
                <button>Compra</button>
            </section>
        </div>
    )
}