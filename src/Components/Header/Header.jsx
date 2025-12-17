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
                    <img
                        src={logo}
                        alt="logo Portfolio Kevin Heckenmeyer"
                    />
                    <nav
                        className={`${styles.navbar} ${
                            isOpen ? styles["show-nav"] : ""
                        }`}>
                        <ul className={styles["navbar__list"]}>
                            <li
                                className={
                                    styles["navbar__list--item"]
                                }>
                                <a
                                    href="/"
                                    className={
                                        styles["navbar__list--link"]
                                    }>
                                    Accueil
                                </a>
                            </li>
                            <li
                                className={
                                    styles["navbar__list--item"]
                                }>
                                <a
                                    href="/"
                                    className={
                                        styles["navbar__list--link"]
                                    }>
                                    A propos
                                </a>
                            </li>
                            <li
                                className={
                                    styles["navbar__list--item"]
                                }>
                                <a
                                    href="/"
                                    className={
                                        styles["navbar__list--link"]
                                    }>
                                    Compétences
                                </a>
                            </li>
                            <li
                                className={
                                    styles["navbar__list--item"]
                                }>
                                <a
                                    href="/"
                                    className={
                                        styles["navbar__list--link"]
                                    }>
                                    Projets
                                </a>
                            </li>
                            <li
                                className={
                                    styles["navbar__list--item"]
                                }>
                                <a
                                    href="/"
                                    className={
                                        styles["navbar__list--link"]
                                    }>
                                    Parcours
                                </a>
                            </li>
                            <li
                                className={
                                    styles["navbar__list--item"]
                                }>
                                <a
                                    href="/"
                                    className={
                                        styles["navbar__list--link"]
                                    }>
                                    Veille technologique
                                </a>
                            </li>
                            <li
                                className={
                                    styles["navbar__list--item"]
                                }>
                                <a
                                    href="/"
                                    className={
                                        styles["navbar__list--link"]
                                    }>
                                    Témoignages
                                </a>
                            </li>
                            <li
                                className={
                                    styles["navbar__list--item"]
                                }>
                                <a
                                    href="/"
                                    className={
                                        styles["navbar__list--link"]
                                    }>
                                    Loisirs
                                </a>
                            </li>
                            <li
                                className={
                                    styles["navbar__list--item"]
                                }>
                                <a
                                    href="/"
                                    className={
                                        styles["navbar__list--link"]
                                    }>
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <button
                            className={styles["navbar__burger"]}
                            onClick={handleisOpen}>
                            <span
                                className={
                                    styles["navbar__burger--bar"]
                                }></span>
                        </button>
                    </nav>
                </>
            )}
        </header>
    )
}

export default Header
