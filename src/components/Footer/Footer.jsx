import styles from "./Footer.module.scss"
import { Link } from "react-router-dom"

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <p>
                <Link to="/mentions-legales" className={styles["footer__legalMention"]}>
                    Mentions légales
                </Link>
            </p>
            <p>© {currentYear} Kevin Heckenmeyer - Portfolio Intégrateur Web</p>
        </footer>
    )
}

export default Footer
