
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
  title: {
    default: "Nolca | Cafetería y Chocolatería",
    template: "%s | Nolca"
  },
  description:
    "Cafetería y chocolatería especializada en productos artesanales. Envíos, tienda online y atención en sucursales.",
  metadataBase: new URL("https://nolca.com"), // Cambiá a tu dominio real

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://nolca.com",
    siteName: "Nolca",
    title: "Nolca | Cafetería y Chocolatería",
    description:
      "Descubrí productos artesanales de café y chocolate. Comprá online y recibilo en tu domicilio.",
    images: [
      {
        url: "https://nolca.com/og-image.jpg", // Cambiá a una imagen real
        width: 1200,
        height: 630,
        alt: "Nolca — Cafetería y Chocolatería"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Nolca | Cafetería y Chocolatería",
    description:
      "Café y chocolate artesanal. Tienda online con envíos.",
    images: ["https://nolca.com/og-image.jpg"], // Igual que arriba
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}


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