import A_propos from "../components/A_propos/A_propos.jsx"
import Hero from "../components/Hero/Hero.jsx"
import Compétences from "../components/Compétences/Compétences.jsx"
import Projets from "../components/Projets/Projets.jsx"
import Parcours from "../components/Parcours/Parcours.jsx"
import Veille from "../components/Veille/Veille.jsx"
import Loisirs from "../components/Loisirs/Loisirs.jsx"

function Home() {
    return (
        <main>
            <Hero />
            <A_propos />
            <Compétences />
            <Projets />
            <Parcours />
            <Veille />
            <Loisirs />
        </main>
    )
}

export default Home
