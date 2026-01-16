import styles from "./Contact.module.scss"

function Contact() {
    return (
        <section className={styles.contact}>
            <h2>Contact</h2>
            <p>Vous pouvez me contacter par mail ou via mes réseaux :</p>
            <div className={styles["contact__icons"]}>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=kevin.heckenmeyer@gmail.com"
                    target="_blank">
                    <i className="fa-solid fa-envelope"></i>
                </a>
                <a
                    href="https://fr.linkedin.com/in/kevin-heckenmeyer-9a4b9b101"
                    target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/kev6711" target="_blank">
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </section>
    )
}

export default Contact
