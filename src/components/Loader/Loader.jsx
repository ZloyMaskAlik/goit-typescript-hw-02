import { PacmanLoader  } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader(){
  return (
    <div className={css.wrapper}>
      <PacmanLoader 
        loading ={true}
        color="#FF6B0A"
        size={35}   
      />
    </div>
  );
};
