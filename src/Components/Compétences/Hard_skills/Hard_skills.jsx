import styles from "./Hard_skills.module.scss"

function HardSkills({ image, alt, skillRating }) {
    return (
        <div className={styles["hard-skills__items"]}>
            <img src={image} alt={alt}></img>
            <div className={styles["hard-skills__items--rating"]}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <i key={index} className={`fa-solid fa-star ${index < skillRating ? styles.active : ""}`} />
                ))}
            </div>
        </div>
    )
}

export default HardSkills
