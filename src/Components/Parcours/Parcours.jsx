import styles from "./Parcours.module.scss"

function Parcours() {
    return (
        <section className={styles.career}>
            <h2>Mon parcours</h2>
            <h3>Formations</h3>
            <ul className={styles["career__training"]}>
                <li>
                    En cours d'obtention :{" "}
                    <strong>Intégrateur Web -</strong>{" "}
                    <em>Openclassroooms</em>
                </li>
                <li>
                    2015 :
                    <strong>
                        {" "}
                        Master Professionnel "Risques et
                        Environnement" en double compétences
                        management de projet -{" "}
                    </strong>{" "}
                    <em>Université de Haute-Alsace</em>
                </li>
            </ul>
            <h3>Expériences professionnelles</h3>
            <ul className={styles["career__training"]}>
                <li>
                    Aujourd'hui :{" "}
                    <strong>Intégrateur web en freelance</strong>
                </li>
                <li>
                    06/2024 - 04/2025 :{" "}
                    <strong>
                        Technicien photovoltaïque en bureau d'études -
                    </strong>{" "}
                    <em>Electricité VEIT</em>
                </li>
                <li>
                    04/2017 - 05/2024 :{" "}
                    <strong>Chargé d'études photovoltaïques -</strong>{" "}
                    <em>France Solar</em>
                </li>
            </ul>
        </section>
    )
}

export default Parcours
