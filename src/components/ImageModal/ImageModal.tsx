import Modal from 'react-modal';
import { useEffect } from 'react';
import css from './ImageModal.module.css';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  largeImageURL: string;
};

Modal.setAppElement('#root');

export default function ImageModal ({ isOpen, onRequestClose, largeImageURL }: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        onRequestClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onRequestClose]);

  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={css.overlay}
    >
      <img className={css.image} src={largeImageURL} alt="" />
    </Modal>
  );
};
