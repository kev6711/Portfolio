import Hobbies_item from "./Hobbies_item/Hobbies_item"
import styles from "./Loisirs.module.scss"

function Loisirs() {
    return (
        <section className={styles.hobbies}>
            <h2>Loisirs</h2>
            <Hobbies_item
                icon={<i className="fa-solid fa-table-tennis-paddle-ball"></i>}
                description="Pratique du Padel en club"
                comment="Améliore ma collaboration et mon adaptation rapide, essentielles dans un projet web en équipe."
            />
            <Hobbies_item
                icon={<i className="fa-solid fa-gamepad"></i>}
                description="Test de jeux vidéos"
                comment="Développe ma logique et mon sens de l’expérience utilisateur, déterminants pour créer des interfaces fluides et intuitives."
            />
            <Hobbies_item
                icon={<i className="fa-solid fa-leaf"></i>}
                description="Intérêt pour la nature/écologie"
                comment="Influence ma façon de développer : code optimisé, performances maîtrisées et approche responsable."
            />
        </section>
    )
}

export default Loisirs
