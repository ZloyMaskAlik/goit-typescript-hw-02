import css from './ErrorMessage.module.css';

type Props = {
  message: string;
};

export default function ErrorMessage ({ message }: Props){
  return (
    <div className={css.errorMessage}>
      <p>{message}</p>
    </div>
  );
};

