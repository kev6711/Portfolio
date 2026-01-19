import styles from "./Header.module.scss"
import logo from "../../assets/images/logo_transparent.png"
import { useState } from "react"
import { useLocation, Link } from "react-router-dom"

function Header() {
    const pathname = useLocation().pathname
    const isProjectPage = pathname.startsWith("/projet")
    const [isOpen, setIsOpen] = useState(false)

    const handleisOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header>
            {isProjectPage ? (
                <Link to="/" className={styles.backArrowlink}>
                    <i className="fa-solid fa-arrow-left"></i>
                </Link>
            ) : (
                <>
                    <img src={logo} alt="logo Portfolio Kevin Heckenmeyer" />
                    <nav
                        className={`${styles.navbar} ${
                            isOpen ? styles["show-nav"] : ""
                        }`}>
                        <ul className={styles["navbar__list"]}>
                            <li className={styles["navbar__list--item"]}>
                                <a
                                    href="#hero"
                                    className={styles["navbar__list--link"]}
                                    onClick={() => setIsOpen(false)}>
                                    Accueil
                                </a>
                            </li>
                            <li className={styles["navbar__list--item"]}>
                                <a
                                    href="#a_propos"
                                    className={styles["navbar__list--link"]}
                                    onClick={() => setIsOpen(false)}>
                                    A propos
                                </a>
                            </li>
                            <li className={styles["navbar__list--item"]}>
                                <a
                                    href="#skills"
                                    className={styles["navbar__list--link"]}
                                    onClick={() => setIsOpen(false)}>
                                    Compétences
                                </a>
                            </li>
                            <li className={styles["navbar__list--item"]}>
                                <a
                                    href="#projets"
                                    className={styles["navbar__list--link"]}
                                    onClick={() => setIsOpen(false)}>
                                    Projets
                                </a>
                            </li>
                            <li className={styles["navbar__list--item"]}>
                                <a
                                    href="#career"
                                    className={styles["navbar__list--link"]}
                                    onClick={() => setIsOpen(false)}>
                                    Mon Parcours
                                </a>
                            </li>
                            <li className={styles["navbar__list--item"]}>
                                <a
                                    href="#technological-watch"
                                    className={styles["navbar__list--link"]}
                                    onClick={() => setIsOpen(false)}>
                                    Veille technologique
                                </a>
                            </li>
                            <li className={styles["navbar__list--item"]}>
                                <a
                                    href="#hobbies"
                                    className={styles["navbar__list--link"]}
                                    onClick={() => setIsOpen(false)}>
                                    Loisirs
                                </a>
                            </li>
                            <li className={styles["navbar__list--item"]}>
                                <a
                                    href="#contact"
                                    className={styles["navbar__list--link"]}
                                    onClick={() => setIsOpen(false)}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <button
                            className={styles["navbar__burger"]}
                            onClick={handleisOpen}>
                            <span className={styles["navbar__burger--bar"]}></span>
                        </button>
                    </nav>
                </>
            )}
        </header>
    )
}

export default Header
