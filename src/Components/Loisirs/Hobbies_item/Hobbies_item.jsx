import styles from "./Hobbies_item.module.scss"

function Hobbies_item({ icon, description, comment }) {
    return (
        <>
            <div className={styles["hobbies__item"]}>
                {icon}
                <h3 className={styles["hobbies__item--description"]}>{description}</h3>
            </div>
            <p className={styles["hobbies__item--comment"]}>{comment}</p>
        </>
    )
}

export default Hobbies_item
