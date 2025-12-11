import styles from "../../pages/Projet.module.scss"

function ProjectListSection({ className, title, items }) {
    return (
        <section className={className}>
            <h2>{title}</h2>
            <ul className={styles["list-section"]}>
                {items.map((item, index) => (
                    <li key={`${index}-${item}`}>{item}</li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectListSection
