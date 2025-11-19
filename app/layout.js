  import "./globals.css";
  import styles from "@/app/styles/layout.module.scss";
  import { Bitter } from "next/font/google";

  const bitter = Bitter({
    subsets: ["latin"],
    weight: ["400", "700"],
  });

  export const metadata = {
    title: "Cafeteria Nolca",
    descripcion: "cafe y chocolate"
  };

  export default function RootLayout({ children }) {
    return (
      <html lang="en" className={bitter.className}>
        <head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          />
        </head>

        <body className={styles.layout}>
          <header>
            <div>
              <h1>Cafetería Nolca</h1>
              <img src="/favicon.ico" />
            </div>

            <nav>
              <label htmlFor="menu-toggle">
                <span className="material-symbols-outlined">menu</span>
              </label>
              <input id="menu-toggle" type="checkbox" />
              <ul>
                <li className={styles.close}>
                  <label htmlFor="menu-toggle">
                    <span className="material-symbols-outlined">close</span>
                  </label>
                </li>         
                <li><a href="/">Inicio</a></li>
                <li><a href="/paginas/compra">Compra</a></li>
                <li><a href="/paginas/sucursales">Sucursales</a></li>
                <li><a href="/paginas/contacto">Contacto</a></li>
                <li><a href="/paginas/donaciones">Doncaciones</a></li>
              </ul>
            </nav>
          </header>

          <main style={{ flex: 1 }}>
            {children}
          </main>

          <footer>
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
            <section>
              <nav>
                <ul className={styles.menufotter}>
                  <li><a href="/">Inicio</a></li>
                  <li><a href="">Compra</a></li>
                  <li><a href="">Sucursales</a></li>
                  <li><a href="">Contacto</a></li>
                  <li><a href="">Donaciones</a></li>
                </ul>
              </nav>
            </section>

            <section>
              <ul>
                <li><a href="https://www.instagram.com/parque.nacional.iguazu/?hl=es"><img src="/images/instagram.svg" /></a></li>
                <li><a href="https://www.facebook.com/ParqueNacIguazu/?locale=es_LA"><img src="/images/facebook.svg" /></a></li>
              </ul>
            </section>

            <section>
              <p>© Copyright 2025, Parque Nacional Iguazú.<br />Todos los derechos reservados</p>
              <img className={styles.imgFooter} src="/favicon.ico" />
            </section>
            </div>
          </footer>
        </body>
      </html>
    );
  }