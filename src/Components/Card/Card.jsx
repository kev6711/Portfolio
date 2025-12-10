import styles from "./Card.module.scss"
import projects from "../../assets/data/projects.json"
import { Link } from "react-router-dom"

function Card() {
    return (
        <div className={styles.cards}>
            {projects.map((project) => (
                <>
                    <h3 className={styles["cards__title"]}>
                        {project.title}
                    </h3>
                    <p className={styles["cards__description"]}>
                        {project.description}
                    </p>
                    <Link
                        key={project.id}
                        to={`/projet/${project.id}`}>
                        <article className={styles.card}>
                            <img
                                className={styles["card__cover"]}
                                src={project.cover}
                                alt={project.title}
                            />
                            <div className={styles["card__tags"]}>
                                {project.stack.map((tag) => (
                                    <p
                                        key={tag}
                                        className={
                                            styles["card__tags--tag"]
                                        }>
                                        {tag}
                                    </p>
                                ))}
                            </div>
                        </article>
                    </Link>
                </>
            ))}
        </div>
    )
}

export default Card
