import A_propos from "../components/A_propos/A_propos.jsx"
import Hero from "../components/Hero/Hero.jsx"
import Compétences from "../components/Compétences/Compétences.jsx"

function Home() {
    return (
        <main>
            <Hero />
            <A_propos />
            <Compétences />
        </main>
    )
}

export default Home
