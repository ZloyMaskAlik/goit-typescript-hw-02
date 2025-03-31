import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn ({ onLoadMore }){
  return (
    <button className={css.button} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};