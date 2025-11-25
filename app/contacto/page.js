import styles from "@/styles/contacto.module.scss";


export default function Contacto() {
  return (
    <div className={styles.principal}>
      <h2 className={styles.h2}>Contacto</h2>


      <div className={styles.formContainer}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSexQi9FcqGG6IiPZ7_gXrJpjSN0ry02VMLtn9cBJAmW0R1cdg/viewform?usp=header"
        >
        </iframe>
      </div>


    </div>
  );
}
