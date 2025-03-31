import css from './ImageCard.module.css';

export default function ImageCard({ image, showModal }){
  return (
    <div>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => showModal(image.urls.regular)}
      />
    </div>
  );
};