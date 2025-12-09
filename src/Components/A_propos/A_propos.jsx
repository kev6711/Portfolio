import styles from "./A_propos.module.scss"

function A_propos() {
    return (
        <section className={styles.a_propos}>
            <h2>A propos</h2>
            <p>
                Ancien technicien en bureau d’études photovoltaïques, j’ai choisi de me reconvertir dans le{" "}
                <strong>développement web</strong> après un bilan de compétences révélant mon intérêt pour la logique,
                la création numérique et la résolution de problèmes.
            </p>
            <p>
                En suivant la formation <strong>“Intégrateur Web”</strong> d’OpenClassrooms, j’ai rapidement accroché au{" "}
                <strong>HTML</strong>, <strong>CSS / Sass</strong>, <strong>JavaScript</strong> et découvert{" "}
                <strong>React</strong>, dont la logique de composants réutilisables correspond parfaitement à ma façon
                de penser.
            </p>
            <p>
                <strong>Curieux</strong>, <strong>rigoureux</strong> et doté d’un <strong>esprit analytique</strong>,
                j’apprends vite et j’aime résoudre des problèmes en cherchant des solutions simples, propres et
                efficaces. <br />
                Mon parcours technique renforce aujourd’hui cette capacité à analyser et comprendre rapidement les
                enjeux.
            </p>
            <p>
                Aujourd’hui, je souhaite rejoindre une équipe passionnée en tant que{" "}
                <strong>développeur front-end junior</strong> ou proposer mes compétences en <strong>freelance</strong>{" "}
                pour créer des interfaces modernes, accessibles et orientées utilisateur.
                <br />
                Je suis motivé par l’idée de contribuer à des projets concrets, d’apprendre en continu et de monter en
                compétence dans l’écosystème <strong>JavaScript/React</strong>.
            </p>
        </section>
    )
}

export default A_propos
