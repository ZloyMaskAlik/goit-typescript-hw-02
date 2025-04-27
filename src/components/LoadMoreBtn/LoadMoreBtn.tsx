import css from './LoadMoreBtn.module.css';

type Props = {
  onLoadMore: () => void;
};

export default function LoadMoreBtn ({ onLoadMore }: Props) {
  return (
    <button className={css.button} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};