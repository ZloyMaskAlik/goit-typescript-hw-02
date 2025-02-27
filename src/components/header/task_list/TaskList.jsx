
import styles from './TaskList.module.css'
import Task from './task/Task'


export default function TaskList ({ listIndex }) {
    return (
        <ul className={styles.list}>
            {listIndex.map((task) => (
                <li className={styles.item} key={task.id}>
                    <Task item={task} />
                </li>
            ))}
     </ul>)
}