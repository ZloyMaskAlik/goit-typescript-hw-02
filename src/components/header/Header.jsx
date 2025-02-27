import reactLogo from '../../assets/react.svg'
import goitLogo from '../../assets/goit.svg'
import earth from '../../assets/earth.svg'
import styles from './Header.module.css'
import TaskList from './task_list/taskList';
import taskList from './task_list/taskList.json'

const taskCompleted = taskList.filter((task) => task.completed);  

console.log(taskCompleted);


export default function Header() {
    return (
        <div className={styles.header}>
        
            <a className={styles.link} href="./index.html" aria-label="Site logo">
                <img src={goitLogo} className={styles.goit}  alt="Goit logo" />
            </a>
            <div className={styles.taskList}>
            <div className={styles.icon}> 
                <img src={reactLogo} className={styles.react} alt="React logo" />
                <img src={earth} className={styles.earth} alt="Earth logo" />
            </div>
            <p className={styles.item}>HOMEWORK <span>REACT</span> TASK 1</p>
            </div>
            
            <TaskList listIndex={taskCompleted} />
        </div>
    
    );
};
  
