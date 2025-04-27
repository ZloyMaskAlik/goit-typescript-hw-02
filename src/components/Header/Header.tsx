import typeLogo from '../../assets/typescript.svg'
import goitLogo from '../../assets/goit.svg'
import styles from './Header.module.css'


export default function Header() {
    return (
        <div className={styles.header}>
        
            <a className={styles.link} href="./index.html" aria-label="Site logo">
                <img src={goitLogo} className={styles.goit}  alt="Goit logo" />
            </a>
            <div className={styles.taskList}>
            <div className={styles.icon}> 
                <img src={typeLogo} className={styles.type} alt="Typescript logo" />
            </div>
            <p className={styles.item}>HOMEWORK <span>TYPESCRIPT</span> TASK 2</p>
            </div>
        
        </div>
    
    );
};
  
