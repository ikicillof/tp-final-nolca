import styles from "../styles/card.module.scss"

export default function Card ({ imagen, titulo, texto }) {
    return (
        <article className= {styles.slide} style= {{ backgroundImage: `url(${imagen}`}}>
            <div className={styles.overlay}>
                <h3 className={styles.slideTitle}>{titulo}</h3>
                <p className={styles.slideText}>{texto}</p>
            </div>
        </article>
    )
}