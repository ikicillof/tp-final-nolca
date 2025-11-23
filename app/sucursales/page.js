import styles from "@/styles/sucursales.module.scss"
import Carousel from "@/componentes/carrusel"




export default function Sucursales () {
    const sucu = [
        {
            imagen: '/images/sucuPueyrredón.jpeg',
            titulo: " ",
            texto: " "
        },
        {
            imagen: '/images/sucuImg2.jpg',
            titulo: " ",
            texto: " "
        },
        {
            imagen: '/images/sucuImg3.jpg',
            titulo: " ",
            texto: " "
        }
    ]
    const sucu1 = [
        {
            imagen: '/images/sucuChas.jpeg',
            titulo: " ",
            texto: " "
        },
        {
            imagen: '/images/sucu1Img2.avif',
            titulo: " ",
            texto: " "
        },
        {
            imagen: '/images/sucu1Img3.jpg',
            titulo: " ",
            texto: " "
        }
    ]
    const sucu2 = [
        {
            imagen: '/images/sucuLinch.jpeg',
            titulo: " ",
            texto: " "
        },
        {
            imagen: '/images/sucu2Img2.jpg',
            titulo: " ",
            texto: " "
        },
        {
            imagen: '/images/sucu2Img3.jpg',
            titulo: " ",
            texto: " "
        }
    ]
    return (
        <div className={styles.prinsipal}>
            <div className={styles.normal}>
                <Carousel className={styles.carruselSucursales} items={sucu} intervalo={3000}/>
                <div className={styles.interno}>
                    <h3>Villa Pueyrredón</h3>
                    <p>Bolivia 1123</p>
                </div>
            </div>
            <div className={styles.grande}>
                <Carousel className={styles.carruselSucursales} items={sucu1} intervalo={3000}/>
                <div className={styles.interno}>
                    <h3>Parque Chas</h3>
                    <p>Berlin 874</p>
                </div>
            </div>
            <div className={styles.normal}>
                <Carousel className={styles.carruselSucursales} items={sucu2} intervalo={3000}/>
                <div className={styles.interno}>
                    <h3>Caballito</h3>
                    <p>Donato Alvarez 2753</p>
                </div>
            </div>
        </div>
    )
}

