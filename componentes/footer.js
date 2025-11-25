"use client"

import styles from "@/styles/footer.module.scss";
import { links } from "@/componentes/nav";

export default function Footer () {
    return (
        <footer className={styles.footer}>
          <div className={styles.sucursales}>
            <div><h2>Serving coffee everyday</h2></div>
            <div>
              <h3>Villa Pueyrredón</h3>
              <p>Bolivia 1123</p>
            </div>
            <div>
              <h3>Parque Chas</h3>
              <p>Berlin 874</p>
            </div>
            <div>
              <h3>Caballito</h3>
              <p>Donato Alvarez 2753</p>
            </div>
          </div>
          <div className={styles.restoFooter}>
          <section  className={styles.sec1}>
            <nav>
              <ul className={styles.menufooter}>
                {
                  links.map((link, i) => <li key={i}><a href={link.url}>{link.name}</a></li>)
                }
              </ul>
            </nav>
          </section>

          <section className={styles.sec2}>
            <ul>
              <li><a href="https://www.instagram.com/nolca_coffee_oficial/#"><img src="/images/instagram.svg" /></a></li>
              <li><a href="https://www.Facebook.com/profile.php?id=61584365303554"><img src="/images/facebook.svg" /></a></li>
            </ul>
          </section>

          <section className={styles.sec3}>
            <p>© Copyright 2025, Cafetería Nolca.<br />Todos los derechos reservados</p>
            <img className={styles.imgFooter} src="/favicon.ico" />
          </section>
          </div>
        </footer>
    )
}
