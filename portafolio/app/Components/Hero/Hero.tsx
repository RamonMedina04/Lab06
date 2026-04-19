import React from "react";
import styles from './Hero.module.css'

export default function Hero(){
    return (
        <section className={styles.hero} id="home">
            <div className={`container ${styles.hero__container}`}>
                <div className={styles.hero__content}>
                    <span className={styles.hero__greeting}>¡Hola! 👋 Soy</span>
                    <h1 className={styles.hero__title}>Ramón Medina Hernández</h1>
                    <h2 className={styles.hero__subtitle}>
                        <span className={styles.highlight}>Análista de Datos</span> en Crecimiento
                    </h2>
                    <p className={styles.hero__description}>
                        Estudiante de Matemáticas Aplicadas y Computación, interesado en el análisis
                        de datos para la toma de decisiones. Conocimientos robustos en Estadistica, Probabilidad
                        y Modelos Estadisticos. 
                    </p>
                    <div className={styles.hero__buttons}>
                        <a href="#projects" className="btn btn--primary">
                            <i className="fas fa-rocket"></i> Ver mis proyectos
                        </a>
                        <a href="#contact" className="btn btn--outline">
                            <i className="fas fa-envelope"></i> Contáctame
                        </a>
                    </div>
                </div>
                
                <div className={styles.hero__image}>
                    <div className={styles.hero__blob}>
                        <div className={styles.hero__avatar}>
                            <i className="fas fa-chart-line"></i>
                        </div>
                    </div>
                    {/**(Esto lo hizo la IA para arreglar el error de los guiones medios) */}
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--1']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--2']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--3']}`}></div>
                </div>
            </div>
            
            <div className={styles.hero__scroll}>
                <a href="#interests" className={styles['hero__scroll-link']}>
                    <span>Scroll</span>
                    <i className="fas fa-chevron-down"></i>
                </a>
            </div>
        </section>
    )
}