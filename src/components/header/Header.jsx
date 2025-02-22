import reactLogo from '../../assets/react.svg'
import goitLogo from '../../assets/goit.svg'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
        <a href="./index.html" aria-label="Site logo">
            <img src={goitLogo} className={styles.goit}  alt="Goit logo" width="150" height="50" />
        </a>
        <p>
            <img src={reactLogo} className={styles.react} alt="React logo" width="50" height="50" />
            HOMEWORK <span>REACT</span> TASK 1
        </p>
    </div>
    );
};
  
