import "./Footer.module.scss"

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <p>© {currentYear} Kevin Heckenmeyer - Portfolio Intégrateur Web</p>
        </footer>
    )
}

export default Footer
