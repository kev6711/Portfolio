import styles from "./MentionsLégales.module.scss"
import { useEffect } from "react"

function MentionsLégales() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main>
            <h1 className={styles["legalMention__title"]}>Mentions Légales</h1>
            <section>
                <h2>Editeur du site</h2>
                <p>Nom : Kevin HECKENMEYER</p>
                <p>Statut : Auto-entrepreneur</p>
                <p>Numéro de SIRET : 90080845200040</p>
                <p>Code APE : 7112B</p>
                <p>Adresse du siège social : 2C Rue du Bubenstein 67310 WASSELONNE</p>
                <p>Email : kevin.heckenmeyer@gmail.com</p>
            </section>
            <section>
                <h2>Hébergement</h2>
                <p>
                    Hébergeur : GitHub Pages – GitHub Inc., 88 Colin P Kelly Jr St, San
                    Francisco, CA 94107, USA{" "}
                </p>
            </section>
            <section>
                <h2>Propriété intellectuelle</h2>
                <p>
                    L’ensemble des éléments figurant sur ce site (textes, images,
                    graphismes, logo, code source, structure, animations) est protégé par
                    le droit de la propriété intellectuelle et est la propriété exclusive
                    de Kevin Heckenmeyer, sauf mention contraire.
                </p>
                <p>
                    Toute reproduction, représentation, modification ou exploitation,
                    totale ou partielle, sans autorisation écrite préalable, est
                    strictement interdite.
                </p>
            </section>
            <section>
                <h2>Responsabilité</h2>
                <p>
                    L’éditeur s’efforce de fournir sur ce site des informations aussi
                    précises que possible. Toutefois, il ne saurait être tenu responsable
                    des omissions, inexactitudes ou carences dans la mise à jour.
                </p>
                <p>Le site peut contenir des liens vers des sites externes.</p>
                <p>
                    L’éditeur ne peut être tenu responsable du contenu ou du
                    fonctionnement de ces sites tiers.
                </p>
            </section>
            <section>
                <h2>Données personnelles</h2>
                <p>
                    Les informations personnelles éventuellement collectées via le
                    formulaire de contact ou par email sont utilisées exclusivement dans
                    le cadre des échanges professionnels.
                </p>
                <p>Ces données ne sont ni vendues, ni cédées à des tiers.</p>
                <p>
                    Conformément au Règlement Général sur la Protection des Données
                    (RGPD), vous disposez d’un droit d’accès, de rectification et de
                    suppression des données vous concernant.
                </p>
                <p>
                    Pour exercer ce droit, vous pouvez contacter :
                    kevin.heckenmeyer@gmail.com .
                </p>
            </section>
            <section>
                <h2>Cookies</h2>
                <p>
                    Ce site n’utilise pas de cookies de suivi ou de cookies publicitaires.
                </p>
                <p>
                    Si des cookies techniques ou statistiques venaient à être utilisés, un
                    bandeau de consentement serait mis en place conformément à la
                    réglementation en vigueur.
                </p>
            </section>
            <section>
                <h2>Droit applicable</h2>
                <p>
                    Le présent site est soumis au droit français. En cas de litige, les
                    tribunaux français seront seuls compétents.
                </p>
            </section>
        </main>
    )
}

export default MentionsLégales
