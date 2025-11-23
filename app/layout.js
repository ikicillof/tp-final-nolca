
import "./globals.css";
import styles from "@/styles/layout.module.scss";
import { Bitter } from "next/font/google";
import Nav from "@/componentes/nav";
import Footer from "@/componentes/footer";

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
          <Nav/>
        </header>
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}