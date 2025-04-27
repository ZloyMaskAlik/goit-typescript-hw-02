import { PacmanLoader  } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader(){
  return (
    <div className={css.wrapper}>
      <PacmanLoader 
        loading ={true}
        color="rgb(10, 45, 224)"
        size={35}   
      />
    </div>
  );
};
