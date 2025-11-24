import styles from "@/styles/carrito.module.scss"
import ProductText from "@/componentes/productText"

export default function () {

    return (
        <div className={styles.prinsipal}>
            <div className={styles.carrito}>
                <ProductText image={"/images/almendras.jpg"} name={"chocolate con almendra"} costo={3000} cantidad={4}  />
                <ProductText image={"/images/almendras.jpg"} name={"chocolate con almendra"} costo={3000} cantidad={4}  />
                <ProductText image={"/images/almendras.jpg"} name={"chocolate con almendra"} costo={3000} cantidad={4}  />
            </div>

            <div className={styles.compra}>
                <button>Compra</button>
                <p>Total: 12000$</p>
                <input type="search" placeholder="Ingrese su cupón..." />
            </div>
        </div>
    )
}
