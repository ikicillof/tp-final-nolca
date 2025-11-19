import Image from "next/image";
import styles from "@/app/page.module.scss";
import Carousel from "./componentes/carrusel";
import triada from "./componentes/triada";

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
                <Carousel className={styles.carruselIndex} items={cafes} intervalo={3000} />
                <Carousel className={styles.carrusel2Index} items={chocolates} intervalo={3000} direccion={"down"}/>
            </div>
            <div className={styles.sec3}>
                <div className= {styles.normal}>
                    <h3>¿De donde viene?</h3>
                    <p>
                        NOLCA nació del sueño compartido de tres amigos, 
                        unidos por el amor al café, al chocolate y a los momentos 
                        simples que se vuelven eternos. Surgió de tardes largas, 
                        risas sinceras y el deseo de transformar esa calidez en un 
                        lugar donde cada aroma contara su propia historia.
                    </p>
                </div>
                <div className={styles.normal}>
                    <h3>¿Cuál es nuestro objetivo?</h3>
                    <p>
                        Nuestro objetivo es crear un espacio donde las personas 
                        puedan detenerse, reconectar y disfrutar. Queremos que cada 
                        visita se sienta como volver a casa: un instante cálido, simple 
                        y profundo, capaz de volverse eterno.
                    </p>
                </div>
                <div className={styles.normal}>
                    <h3>¿Qué nos diferencia?</h3>
                    <p>
                        Nos diferencia una esencia que no se fabrica: el cuidado artesanal, 
                        la pasión por los sabores auténticos y la idea de que cada taza 
                        y cada bocado deben transmitir algo más que sabor. En NOLCA no solo 
                        servimos productos; compartimos momentos que buscan sentirse únicos 
                        y cercanos.
                    </p>
                </div>
            </div>
        </div>
    )
}