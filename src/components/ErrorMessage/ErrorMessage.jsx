import css from './ErrorMessage.module.css';

export default function ErrorMessage({ message }){
  return (
    <div className={css.errorMessage}>
      <p>{message}</p>
    </div>
  );
};

