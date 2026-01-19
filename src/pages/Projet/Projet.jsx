import styles from "./Projet.module.scss"
import { useParams } from "react-router-dom"
import projects from "../../assets/data/projects.json"
import ProjectListSection from "../../components/ProjectListSection/ProjectListSection"
import { useEffect } from "react"

function Projet() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { id } = useParams()
    const projet = projects.find((projet) => projet.id === id)
    return (
        <main>
            <section className={styles.hero}>
                <h1>{projet.title}</h1>
                <p>{projet.description}</p>
                <img src={projet.cover} alt={projet.title}></img>
                <div className={styles["hero__cta"]}>
                    <a href={projet.dépôtGithub} target="_blank">
                        <i className="fa-brands fa-github"></i>
                        Dépôt Github
                    </a>
                    {projet.githubPages && (
                        <a href={projet.githubPages} target="_blank">
                            <i className="fa-brands fa-github"></i>
                            Github Pages
                        </a>
                    )}
                </div>
            </section>
            <section className={styles["context"]}>
                <h2>Contexte</h2>
                <p>{projet.contexte}</p>
            </section>
            <ProjectListSection
                className={styles.goals}
                title="Objectifs"
                items={projet.objectifs}
            />
            <ProjectListSection
                className={styles.stack}
                title="Stack technique"
                items={projet.stack}
            />
            <ProjectListSection
                className={styles.skills}
                title="Compétences acquises"
                items={projet.compétences}
            />
            <ProjectListSection
                className={styles.results}
                title="Résultats obtenus"
                items={projet.résultats}
            />
            <ProjectListSection
                className={styles.improvments}
                title="Améliorations suggérées"
                items={projet.améliorations}
            />
        </main>
    )
}

export default Projet
