import reactLogo from '../../assets/react.svg'
import goitLogo from '../../assets/goit.svg'
import './Header.css'

export default function Header() {
    return (
      <div className="header">
        <a href="./index.html" aria-label="Site logo">
            <img src={goitLogo} className="logo goit" alt="Goit logo" width="150" height="50" />
        </a>
        <p>
            <img src={reactLogo} className="logo react" alt="React logo" width="50" height="50" />
            homework <span>react</span> task 1
        </p>
    </div>
    );
};
  
