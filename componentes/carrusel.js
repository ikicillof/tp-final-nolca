"use client";
import styles from "@/styles/carrusel.module.scss";
import { useState, useEffect } from "react";
import Card from "@/componentes/card";
import classNames from "classnames";

export default function Carousel({className, items, intervalo = 3000, direccion }) {
  const [index, setIndex] = useState(0);
  const mueveHaciaAbajo = direccion === "down";
  const carouselClass = classNames(styles.carousel, className)
  
  useEffect(() => {
    if (!items.length) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalo);
    return () => clearInterval(timer);
  }, [items, intervalo]);

  return (
    <div className={carouselClass}>
      <div
        className={styles.slides}
        style={{
          transform: `translateY(${mueveHaciaAbajo ? index * 100 : -index * 100}%)`,
          flexDirection: mueveHaciaAbajo ? "column-reverse" : "column",
        }}
      >
        {items.map((item, i) => (
          <Card
            key={i}
            imagen={item.imagen}
            titulo={item.titulo}
            texto={item.texto}
          />
        ))}
      </div>
    </div>
  );
}
