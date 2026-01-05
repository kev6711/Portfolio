import styles from "./Hobbies_item.module.scss"

function Hobbies_item({ icon, description, comment }) {
    return (
        <>
            <div className={styles["hobbies__item"]}>
                {icon}
                <p className={styles["hobbies__item--description"]}>{description}</p>
            </div>
            <p className={styles["hobbies__item--comment"]}>{comment}</p>
        </>
    )
}

export default Hobbies_item
