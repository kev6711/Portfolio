import A_propos from "../components/A_propos/A_propos.jsx"
import Hero from "../components/Hero/Hero.jsx"
import Compétences from "../components/Compétences/Compétences.jsx"
import Projets from "../components/Projets/Projets.jsx"

function Home() {
    return (
        <main>
            <Hero />
            <A_propos />
            <Compétences />
            <Projets />
        </main>
    )
}

export default Home
