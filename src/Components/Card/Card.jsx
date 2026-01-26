import styles from "./Card.module.scss"
import projects from "../../assets/data/projects.json"
import { Link } from "react-router-dom"

function Card() {
    return (
        <div className={styles.cards}>
            {projects.map((project) => (
                <div key={project.id} className={styles["cards__item"]}>
                    <h3 className={styles["cards__title"]}>{project.title}</h3>
                    <p className={styles["cards__description"]}>{project.description}</p>
                    <Link to={`/projet/${project.id}`}>
                        <article className={styles.card}>
                            <img
                                className={styles["card__cover"]}
                                src={`${import.meta.env.BASE_URL}${project.cover}`}
                                alt={project.title}
                                loading="lazy"
                            />
                            <div className={styles["card__tags"]}>
                                {project.stack.map((tag, index) => (
                                    <p key={index} className={styles["card__tags--tag"]}>
                                        {tag}
                                    </p>
                                ))}
                            </div>
                        </article>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Card
