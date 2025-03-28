import css from './Contact.module.css';

export default function Contact ({ id, name, number, onDelete }){
  return (
    <>
      <li className={css.item}>
        <div>
          <p className={css.text}>
            <span className={css.span} role="img" aria-label="Contact Name">
            👤
            </span>
            {name}
          </p>
          <p>
            <span className={css.span} role="img" aria-label="Phone Number">
            ☎️
            </span>
            {number}
          </p>
        </div>
        <button className={css.btn} type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    </>
  );
};
