import styles from "./Projets.module.scss"
import Card from "../Card/Card"

function Projets() {
    return (
        <section className={styles.projets}>
            <h2>Projets</h2>
            <Card />
        </section>
    )
}

export default Projets
