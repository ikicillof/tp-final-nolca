import styles from "@/styles/productText.module.scss"

export default function ProductText({image, name, costo, cantidad, onChange, id}) {
    return (
        <div className={styles.product}>
            <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
            <h3>{name}</h3>
            <p>${costo}</p>
            <div className={styles.cantidad}>
                <button onClick={() => onChange(id, cantidad - 1)}>-</button>
                <div>{cantidad}</div>
                <button onClick={() => onChange(id, cantidad + 1)}>+</button>
            </div>
            <p>{cantidad}</p>
            <p>${cantidad * costo}</p>
        </div>
    )
}