import styles from "./Veille.module.scss"
import { useState, useEffect } from "react"
import slideshow from "../../assets/data/slideshow.json"
import technologicalCardImage from "../../assets/images/card_veille_technologique.png"

function Veille() {
    const [i, setI] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if (isPaused || slideshow.length <= 1) return
        const interval = setInterval(() => {
            setI((prev) => (prev >= slideshow.length - 1 ? 0 : prev + 1))
        }, 5000)

        return () => clearInterval(interval)
    }, [isPaused])

    return (
        <section className={styles["technological-watch"]} id="technological-watch">
            <h2>Veille technologique</h2>
            <div className={styles["technological-watch__wrapper"]}>
                <a
                    key={i}
                    href={slideshow[i].source}
                    target="_blank"
                    className={styles["technological-watch__card"]}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={() => setIsPaused(false)}>
                    <img
                        className={styles["technological-watch__card--image"]}
                        src={technologicalCardImage}
                        alt="illustration développmement web"
                    />
                    <h3 className={styles["technological-watch__card--title"]}>
                        {slideshow[i].title}
                    </h3>
                    <p className={styles["technological-watch__card--description"]}>
                        {slideshow[i].description}
                    </p>
                    <p className={styles["technological-watch__card--date"]}>
                        {slideshow[i].date}
                    </p>
                </a>
                <div className={styles["technological-watch__bullets"]}>
                    {slideshow.map((_, index) => (
                        <button
                            className={index === i ? styles.isActive : ""}
                            key={index}
                            onClick={() => setI(index)}></button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Veille
