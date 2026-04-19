import React from "react"
import styles from "./proyectos.module.css"

export default function Proyectos(){
    return(
        <section className={`${styles.projects} section`} id="projects">
            <div className="container">
            <div className="section__header">
                <span className="section__subtitle">&lt; Mi trabajo /&gt;</span>
                <h2 className="section__title">Proyectos Destacados</h2>
                <p className="section__description">
                    Una selección de proyectos que demuestran mis habilidades y pasión por el desarrollo
                </p>
            </div>
                
                <div className={styles.projects__grid}>
                    <article className={styles.project__card}>
                        <div className={styles.project__image}>
                            <div className={styles.project__placeholder}>
                                <i className="fa-solid fa-people-group"></i>
                            </div>
                            <div className={styles.project__overlay}>
                                <a href="/docs/El apéndice de la Geometría Euclidiana el quinto postulado.pdf" download="El apéndice de la Geometría Euclidiana el quinto postulado" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>Ponente en el 58 Congreso Nacional de Matemáticas</h3>
                            <p className={styles.project__description}>
                                Expuse mi ponencia titulada "El apéndice de la Geometría Euclidiana: el quinto postulado",
                                frente a un grupo de personas.
                            </p>
                            <div className={styles.project__tech}>
                                <span className={styles.tech}>LaTeX</span>
                                <span className={styles.tech}>Geometría Euclidiana</span>
                                <span className={styles.tech}>Geometría Hiperbólica</span>
                            </div>
                        </div>
                    </article>

                    <article className={styles.project__card}>
                        <div className={styles.project__image}>
                            <div className={styles.project__placeholder}>
                                <i className="fa-solid fa-magnifying-glass-chart"></i>
                            </div>
                            <div className={styles.project__overlay}>
                                <a href="https://colab.research.google.com/drive/1INphyWWAcsVmq8q1FM_eFB9vFYKVeeTP?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                                <a href="https://github.com/ramonmhdz/Estudio.-Estadistica.git" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>Análisis de Datos</h3>
                            <p className={styles.project__description}>
                                Se realizó un estudio acerca de la Relación entre el uso del 
                                teléfono y el tiempo de estudio en estudiantes de MAC, usando elementos básicos
                                de estadística.
                            </p>
                            <div className={styles.project__tech}>
                                <span className={styles.tech}>Python</span>
                                <span className={styles.tech}>Estadística</span>
                            </div>
                        </div>
                    </article>
                    
                    <article className={styles.project__card}>
                        <div className={styles.project__image}>
                            <div className={styles.project__placeholder}>
                                <i className="fas fa-robot"></i>
                            </div>
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>Economía, Política y otros juegos.</h3>
                            <p className={styles.project__description}>
                                Organización y diseño curricular del taller "Economía, Política y otros juegos" 
                                basado en modelos de Teoría de Juegos.
                            </p>
                            <div className={styles.project__tech}>
                                <span className={styles.tech}>LaTeX</span>
                                <span className={styles.tech}>Teoría de Juegos</span>
                                <span className={styles.tech}>Teoría de Gráficas</span>
                            </div>
                        </div>
                    </article>
                </div>
                
                <div className={styles.projects__more}>
                    <a href="https://github.com/ramonmhdz" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                        <i className="fab fa-github"></i> Ver más en GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}