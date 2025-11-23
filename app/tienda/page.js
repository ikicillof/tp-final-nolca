import styles from "@/styles/tienda.module.scss";
import Product from "@/componentes/product";

export default function Tienda () {

    const products = [
        {
            name: "chocolate 70%", 
            image: "/images/almendras.jpg", 
            description: "chocolate amargo",
            open: false
        }, 
                {
            name: "chocolate 70%", 
            image: "/images/almendras.jpg", 
            description: "chocolate amargo",
            open: false
        }, 
                {
            name: "chocolate 70%", 
            image: "/images/almendras.jpg", 
            description: "chocolate amargo",
            open: false
        }, 
        {
            name: "chocolate 70%", 
            image: "/images/almendras.jpg", 
            description: "chocolate amargo",
            open: false
        }
    ]

    return (
        <div className={styles.prinsipal}> 
            <div className={styles.barraNav}>
                <section className={styles.buscador}>
                    <input type="search" placeholder="Buscá productos..."/>
                    <span className="material-symbols-outlined">search</span>
                </section>
                <section className={styles.carrito}>
                    <span className="material-symbols-outlined">shopping_cart</span>
                    <p> 3 </p>
                </section>

            </div>
            <div className={styles.tienda}>
                <ul>
                    {
                    products.map((product, i) => <li key={i}><Product name={product.name} image={product.image} description={product.description}/></li>)                
                    }
                
                </ul>
                    
            </div>
        </div>
    )
}