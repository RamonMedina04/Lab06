import React from "react";
import styles from './Intereses.module.css'

export default function Intereses(){
    return (
        <section className={`${styles.interests} section`} id="interests">
            <div className="container">
                <div className="section__header">
                    <span className="section__subtitle">&lt; Lo que me apasiona /&gt;</span>
                    <h2 className="section__title">Intereses & Especialidades</h2>
                    <p className="section__description">
                        Áreas tecnológicas que me entusiasman y en las que busco especializarme
                    </p>
                </div>
                
                <div className={styles.interests__grid}>
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className="fas fa-square-poll-vertical"></i>
                        </div>
                        <h3 className={styles.card__title}>Análisis de Datos</h3>
                        <p className={styles.card__description}>
                            Recopilación, limpieza, procesamiento y visualización de conjuntos
                            de datos para convertirlos en información valiosa que ayuden a una mejor toma de decisiones.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>Python</span>
                            <span className={styles.tag}>R</span>
                            <span className={styles.tag}>Power BI</span>
                        </div>
                    </article>
                    
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className="fa-solid fa-arrows-to-dot"></i>
                        </div>
                        <h3 className={styles.card__title}>Inteligencia de Negocios</h3>
                        <p className={styles.card__description}>
                            Creación de reportes y dashboards estratégicos con información valiosa
                            para la toma de decisiones de empresas.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>Power BI</span>
                            <span className={styles.tag}>Tableau</span>
                        </div>
                    </article>
                    
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className="fas fa-brain"></i>
                        </div>
                        <h3 className={styles.card__title}>Inteligencia Artificial</h3>
                        <p className={styles.card__description}>
                            Machine Learning, procesamiento de datos y desarrollo de 
                            soluciones inteligentes con Python.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>Python</span>
                            <span className={styles.tag}>ML</span>
                            <span className={styles.tag}>Ciencia de Datos</span>
                        </div>
                    </article>
                    
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className="fas fa-database"></i>
                        </div>
                        <h3 className={styles.card__title}>Bases de Datos</h3>
                        <p className={styles.card__description}>
                            Diseño, administración y optimización de bases de datos 
                            relacionales y NoSQL.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>MySQL</span>
                            <span className={styles.tag}>PostgreSQL</span>
                            <span className={styles.tag}>MongoDB</span>
                        </div>
                    </article>
                    
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className="fa-solid fa-diagram-project"></i>
                        </div>
                        <h3 className={styles.card__title}>Modelos de Series Temporales</h3>
                        <p className={styles.card__description}>
                            Métodos estadísticos y de aprendizaje automático
                            que analizan secuencias de datos ordenados cronológicamente 
                            para predecir futuros comportamientos basados en tendencia, 
                            estacionalidad y componentes irregulares.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>Modelo MA</span>
                            <span className={styles.tag}>Modelo AR</span>
                            <span className={styles.tag}>Modelo ARMA</span>
                        </div>
                    </article>
                    
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className="fas fa-infinity"></i>
                        </div>
                        <h3 className={styles.card__title}>Redacción Científica y Técnica</h3>
                        <p className={styles.card__description}>
                            Elaboración de documentos académicos, reportes analíticos complejos 
                            y presentaciones estructuradas con alta calidad tipográfica para comunicar 
                            resultados matemáticos.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>LaTeX</span>
                            <span className={styles.tag}>Investigación</span>
                            <span className={styles.tag}>Reportes</span>
                        </div>
                    </article>
                </div>
                
                <div className={styles.subjects}>
                    <h3 className={styles.subjects__title}>
                        <i className="fas fa-graduation-cap"></i> Materias Relevantes
                    </h3>
                    <div className={styles.subjects__list}>
                        <span className={styles.subject}>Estadística</span>
                        <span className={styles.subject}>Estructuras de Datos</span>
                        <span className={styles.subject}>Probabilidad</span>
                        <span className={styles.subject}>Álgebra Lineal</span>
                        <span className={styles.subject}>Métodos Numéricos</span>
                        <span className={styles.subject}>Optimización</span>
                        <span className={styles.subject}>Procesos Estocásticos</span>
                        <span className={styles.subject}>Sistemas Inteligentes</span>
                    </div>
                </div>
            </div>
        </section>
    )
}