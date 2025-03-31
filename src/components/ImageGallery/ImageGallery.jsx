import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ images, showModal}){
  return (
    <ul className={css.list}>
      {images &&
        images.map(image => {
          return (
            <li className={css.item} key={image.id}>
              <ImageCard image={image} showModal={showModal} />
            </li>
          );
        })}
    </ul>
  );
};