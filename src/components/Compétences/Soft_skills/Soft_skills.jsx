import styles from "./Soft_skills.module.scss"

function SoftSkills({ icon, skill }) {
    return (
        <div className={styles["soft-skills__items"]}>
            <div className={styles["soft-skills__items--icon"]}>
                {icon}
            </div>
            <p className={styles["soft-skills__items--description"]}>
                {skill}
            </p>
        </div>
    )
}

export default SoftSkills
