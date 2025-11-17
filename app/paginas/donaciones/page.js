"use client";


import { useState } from "react";
import styles from "@/app/styles/donaciones.module.scss";


export default function Donaciones() {
  const [mensajeVisible, setMensajeVisible] = useState(false);


  const handleClick = () => {
    setMensajeVisible(true);
    setTimeout(() => setMensajeVisible(false), 5000);
  };


  return (
    <div className={styles.prinsipal}>


      {mensajeVisible && (
        <div className={styles.alerta}>
          ¡Gracias por tu colaboración! Cada aporte ayuda a quienes más lo necesitan. Alias:ivan260909
        </div>
      )}


      <div className={styles.gridContainer}>
        <div className={styles.titulo}>
          <h1 className={styles.h1}>Donaciones</h1>
        </div>
        <div className={styles.parrafo}>
          <p>
            Ayudar mediante donaciones es un acto sencillo pero poderoso que puede transformar vidas y sembrar esperanza en quienes
            atraviesan momentos difíciles. Cada contribución, por pequeña que sea, fortalece la comunidad y demuestra que la empatía
            tiene un impacto real. En Nolca, una cafetería y chocolatería con varias sucursales, este principio se convierte en acción
            concreta. Un porcentaje de cada venta se destina a un fondo de ayuda que financia alimentos, educación y apoyo a personas en
            situaciones vulnerables. Además, la cafetería organiza eventos solidarios y campañas educativas donde los clientes pueden participar
            activamente, creando un vínculo directo con quienes reciben la ayuda. Así, cada café o chocolate comprado se convierte en un
            pequeño gesto de solidaridad, conectando a los clientes con quienes más lo necesitan a través de un circuito de ayuda cálido y organizado,
            demostrando que incluso los gestos cotidianos pueden tener un impacto profundo y duradero en la vida de los demás. Nos importa muchísimo
            ayudar alas personas en situaciones vulnerables y mediante a las donaciones de clientes y hasta organizaciones ofrecemos comedores o eventos
            de recaudación. Ya que creemos en compartir nuestro amor con todos! Esperamos a futuro ser capaces de ayudar aún más, pero esto es un proceso
            así que de a poquito avanzamos.


          </p>
        </div>
        <div className={styles.foto}>
          <img src="/images/donacion.jpeg" alt="Donación" />
        </div>
      </div>


      <div className={styles.boton}>
        <button onClick={handleClick}>Colabora!</button>
      </div>
    </div>
  );
}





