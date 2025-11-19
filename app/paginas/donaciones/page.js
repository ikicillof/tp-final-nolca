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


      <div className={styles.contenido}>
        <div className={styles.sec1}>
          <h1 className={styles.h1}>Donaciones</h1>
          <p>
            En Nolca creemos en el poder de la solidaridad. 
            Destinamos un porcentaje de cada venta y las donaciones 
            de clientes y organizaciones a un fondo que brinda alimentos, 
            educación y apoyo a personas en situación vulnerable. También 
            realizamos eventos y campañas solidarias para que la comunidad 
            participe activamente. Cada café o chocolate se convierte en un 
            gesto real de ayuda. Nuestro compromiso es seguir ampliando este 
            impacto, paso a paso.
          </p>
        </div>
        <div className={styles.sec2}>
          <img src="/images/donacion.jpeg" alt="Donación" />
        </div>
      </div>


      <div className={styles.boton}>
        <button onClick={handleClick}>Colabora!</button>
      </div>
    </div>
  );
}





