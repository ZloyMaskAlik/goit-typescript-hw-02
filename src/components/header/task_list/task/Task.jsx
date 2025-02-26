import styles from './Task.module.css'

export default function Task({ item: {id, link, completed } }) {
    return (
        <>
            <a href={link} className={styles.link}>Task</a>
            <p className={styles.number}>{completed}</p>
            <p className={styles.number}>{id}</p>
        </>
    )
}