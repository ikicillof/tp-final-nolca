import styles from "@/styles/contacto.module.scss";


export default function Contacto() {
  return (
    <div className={styles.principal}>
      <h1>Contacto</h1>


      <div className={styles.formContainer}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSexQi9FcqGG6IiPZ7_gXrJpjSN0ry02VMLtn9cBJAmW0R1cdg/viewform?usp=header"
        >
        </iframe>
      </div>


    </div>
  );
}
