import styles from "@/styles/productText.module.scss"

export default function ProductText({image, name, costo, cantidad}) {
    return (
        <div className={styles.product}>
            <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
            <h3>Producto:{name}</h3>
            <p>Precio: {costo}$</p>
            <p>Cantidad: {cantidad}</p>
            <p>Total: {cantidad * costo}$</p>
        </div>
    )
}