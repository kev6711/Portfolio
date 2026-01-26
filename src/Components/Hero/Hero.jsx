import styles from "./Hero.module.scss"
import cv from "../../assets/data/cv_integrateur_web.pdf"
import photo_mobile from "../../assets/images/compressed/photo_kh_portrait_mobile.webp"

function Hero() {
    return (
        <section className={styles.hero} id="hero">
            <h1>
                Kevin Heckenmeyer <br />
                Intégrateur Web
            </h1>
            <p className={styles["hero__description"]}>
                Intéressé par le développement en React
            </p>
            <div className={styles["hero__wrapper"]}>
                <img
                    className={styles["hero__photo"]}
                    src={photo_mobile}
                    alt="Photo Kevin Heckenmeyer"
                    fetchpriority="high"
                    decoding="async"
                />
                <div className={styles["hero__cta"]}>
                    <a href="#contact">
                        <i className="fa-solid fa-envelope"></i>
                        Me contacter
                    </a>
                    <a href="#projets">
                        <i className="fa-solid fa-folder"></i>
                        Voir mes projets
                    </a>
                    <a href={cv} download aria-label="Télécharger mon CV au format PDF">
                        <i className="fa-solid fa-download"></i>
                        Télécharger mon CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
