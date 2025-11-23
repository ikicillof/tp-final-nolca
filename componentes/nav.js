"use client"

import styles from "@/styles/nav.module.scss"
import { usePathname } from "next/navigation"

export const links = [
  {
    name: "Inicio",
    url: "/"
  }, 
  {
    name: "Tienda", 
    url: "/tienda"
  }, 
  {
    name: "Sucursales", 
    url: "/sucursales"
  }, 
  {
    name: "contacto", 
    url: "/contacto"
  }, 
  {
    name: "Donaciones", 
    url: "/donaciones"
  }
]

export default function Nav () {
    const pathName = usePathname()
    
    return (
        <nav className={styles.nav}>
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
              {
                links.map((link, i) => <li key={i}><a className={pathName === link.url ? styles.activo : undefined} href={link.url}>{link.name}</a></li> )
              }
            </ul>
          </nav>
    )
}