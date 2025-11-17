import Image from "next/image";
import styles from "@/app/page.module.scss";
import Carousel from "./componentes/carrusel";

export default function Inicio () {
    const chocolates = [
        {
            imagen: '/images/amargo.jpg', 
            titulo: " ", 
            texto: " "
        }, 
        { 
            imagen: "/images/dubai.jpg",
            titulo: " ",
            texto: " "
        },
       { 
            imagen: "/images/menstru.jpg",
            titulo: " ",
            texto: " "
        },
             { 
            imagen: "/images/mierda.jpg",
            titulo: " ",
            texto: " "
        },
        { 
            imagen: "/images/almendras.jpg",
            titulo: " ",
            texto: " "
        }
    ]
    const cafes = [

        {
            imagen: '/images/capuchina.jpg', 
            titulo: " ", 
            texto: " "
        }, 
        { 
            imagen: "/images/cortado.jpg",
            titulo: " ",
            texto: " "
        },
       { 
            imagen: "/images/expreso.jpg",
            titulo: " ",
            texto: " "
        },
             { 
            imagen: "/images/flatWithe.jpg",
            titulo: " ",
            texto: " "
        },
        { 
            imagen: "/images/late.jpg",
            titulo: " ",
            texto: " "
        }
    ]

    return (
        <div className="prinsipal">
            <div className={styles.sec1}>
                <div className={styles.seccion1}>
                    <section>
                        <h2>¿Qué es Nolca?</h2>
                        <p>
                            NOLCA nació del sueño compartido de tres amigos, 
                            unidos por el amor al café, al chocolate y a 
                            los momentos simples que se vuelven eternos.
                            Un día decidieron transformar esa calidez en un lugar
                            donde cada aroma contara su historia.
                            Así nació NOLCA: un espacio hecho de amistad, 
                            dulzura y sueños servidos en taza. 
                        </p>
                    </section>
                    <img src="/images/introInicio.jpeg"/>
                </div>
            </div>
            <div className={styles.sec2}>
                <Carousel items={cafes} intervalo={3000} />
                <Carousel items={chocolates} intervalo={3000} direccion={"down"}/>
            </div>
        </div>
    )
}