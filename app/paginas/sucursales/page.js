import styles from "@/app/styles/sucursales.module.scss"
import Carousel from "@/app/componentes/carrusel"




export default function Sucursales () {
    const sucu = [
        {
            imagen: '/images/sucuPueyrredón.jpeg',
            titulo: "Villa Pueyrredón",
            texto: "Bolivia 1123"
        },
        {
            imagen: '/images/sucuChas.jpeg',
            titulo: "Parque Chas",
            texto: "Berlín 874"
        },
        {
            imagen: '/images/sucuLinch.jpeg',
            titulo: "Villa Lynch",
            texto: "República del Líbano 2753"
        }
    ]
    const sucu1 = [
        {
            imagen: '/images/sucuPueyrredón.jpeg',
            titulo: "Villa Pueyrredón",
            texto: "Bolivia 1123"
        },
        {
            imagen: '/images/sucuChas.jpeg',
            titulo: "Parque Chas",
            texto: "Berlín 874"
        },
        {
            imagen: '/images/sucuLinch.jpeg',
            titulo: "Villa Lynch",
            texto: "República del Líbano 2753"
        }
    ]
    const sucu2 = [
        {
            imagen: '/images/sucuPueyrredón.jpeg',
            titulo: "Villa Pueyrredón",
            texto: "Bolivia 1123"
        },
        {
            imagen: '/images/sucuChas.jpeg',
            titulo: "Parque Chas",
            texto: "Berlín 874"
        },
        {
            imagen: '/images/sucuLinch.jpeg',
            titulo: "Villa Lynch",
            texto: "República del Líbano 2753"
        }
    ]
    return (
        <div>
            <Carousel items={sucu} intervalo={3000}/>
            <Carousel items={sucu1} intervalo={3000}/>
            <Carousel items={sucu2} intervalo={3000}/>
        </div>
    )
}

