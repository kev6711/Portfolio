import styles from "./Compétences.module.scss"
import HardSkills from "./Hard_skills/Hard_skills"
import html5Logo from "../../assets/images/skills/html5.png"
import css3Logo from "../../assets/images/skills/css3.png"
import sassLogo from "../../assets/images/skills/sass.png"
import javascriptLogo from "../../assets/images/skills/javascript.png"
import reactLogo from "../../assets/images/skills/react.png"
import reduxLogo from "../../assets/images/skills/redux.png"
import apiLogo from "../../assets/images/skills/api.jpg"
import accessLogo from "../../assets/images/skills/accessibilite.jpg"
import figmaLogo from "../../assets/images/skills/figma.png"
import githubLogo from "../../assets/images/skills/github.png"
import performanceLogo from "../../assets/images/skills/performance.webp"
import responsiveDesignLogo from "../../assets/images/skills/responsive_design.png"
import seoLogo from "../../assets/images/skills/seo.png"
import SoftSkills from "./Soft_skills/Soft_skills"

function Compétences() {
    return (
        <section className={styles.skills} id="skills">
            <h2>Compétences</h2>
            <div className={styles["hard-skills"]}>
                <h3>Hard skills</h3>
                <HardSkills image={html5Logo} alt="Logo html5" skillRating="4" />
                <HardSkills image={css3Logo} alt="Logo css3" skillRating="4" />
                <HardSkills image={sassLogo} alt="Logo sass" skillRating="4" />
                <HardSkills
                    image={javascriptLogo}
                    alt="Logo javascript"
                    skillRating="3"
                />
                <HardSkills image={reactLogo} alt="Logo React" skillRating="3" />
                <HardSkills image={reduxLogo} alt="Logo Reddux" skillRating="2" />
                <HardSkills image={apiLogo} alt="Logo API" skillRating="3" />
                <HardSkills image={figmaLogo} alt="Logo Figma" skillRating="4" />
                <HardSkills image={githubLogo} alt="Logo Github" skillRating="4" />
                <HardSkills
                    image={responsiveDesignLogo}
                    alt="Logo Responsive Design"
                    skillRating="3"
                    ratingDescription="A l'aise"
                />
                <HardSkills image={seoLogo} alt="Logo SEO" skillRating="2" />
                <HardSkills
                    image={accessLogo}
                    alt="Logo Web Accessibility"
                    skillRating="2"
                />
                <HardSkills
                    image={performanceLogo}
                    alt="Logo Web Performance"
                    skillRating="2"
                />
            </div>
            <div className={styles["soft-skills"]}>
                <h3>Soft skills</h3>
                <SoftSkills
                    icon={<i className="fa-solid fa-user-tie"></i>}
                    skill="Sérieux"
                    skillDescription="J’assure un travail fiable et soigné"></SoftSkills>
                <SoftSkills
                    icon={<i className="fa-solid fa-diagram-project"></i>}
                    skill="Logique"
                    skillDescription="J’aime comprendre et structurer les choses"></SoftSkills>
                <SoftSkills
                    icon={<i className="fa-solid fa-filter"></i>}
                    skill="Esprit de synthèse"
                    skillDescription="Je fais ressortir l’essentiel pour faciliter la compréhension"></SoftSkills>
                <SoftSkills
                    icon={<i className="fa-solid fa-ear-listen"></i>}
                    skill="A l'écoute"
                    skillDescription="Je comprends les besoins avant d’agir"></SoftSkills>
                <SoftSkills
                    icon={<i className="fa-solid fa-magnifying-glass"></i>}
                    skill="Capacité d'analyse"
                    skillDescription="J’observe, je déduis, je clarifie"></SoftSkills>
                <SoftSkills
                    icon={<i className="fa-solid fa-repeat"></i>}
                    skill="Adaptabilité"
                    skillDescription="Je m’ajuste facilement aux contraintes"></SoftSkills>
                <SoftSkills
                    icon={<i className="fa-regular fa-lightbulb"></i>}
                    skill="Curieux"
                    skillDescription="J’apprends vite, je teste, j’explore"></SoftSkills>
                <SoftSkills
                    icon={<i className="fa-solid fa-check-double"></i>}
                    skill="Rigoureux"
                    skillDescription="Je reste exigeant sur la qualité de ce que je livre"></SoftSkills>
                <SoftSkills
                    icon={<i className="fa-solid fa-folder-tree"></i>}
                    skill="Organisé"
                    skillDescription="Je structure mon travail efficacement"></SoftSkills>
                <SoftSkills
                    icon={<i className="fa-solid fa-people-group"></i>}
                    skill="Esprit d'équipe"
                    skillDescription="J’aime collaborer et partager"></SoftSkills>
            </div>
        </section>
    )
}

export default Compétences
