"use client"

import styles from "@/styles/product.module.scss";

export default function Product ({image, name, description, open, onChange, id, cantidad, costo}) {
    return (
        <div className={styles.product} style={{ backgroundImage: `url(${image})`}}>
            
            <div className={styles.overlay}>
                <p>{description}</p>
            </div>

            <h3>{name}</h3>

            <section className={styles.infoCompra}>
                <p>${costo}</p>
                {
                    cantidad ? (
                        <div className={styles.quantity}>
                            <button onClick={() => onChange(id, cantidad - 1)}>-</button>
                            <div>{cantidad}</div>
                            <button onClick={() => onChange(id, cantidad + 1)}>+</button>
                        </div>
                    ) : (
                        <button onClick={() => onChange(id, 1)}>Compra</button>
                    )
                }
            </section>
        </div>
    )
}
