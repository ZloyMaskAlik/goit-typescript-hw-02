import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Header from './Header/Header';
import getImages from '../services/api';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageModal from './ImageModal/ImageModal';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import SearchBar from './SearchBar/SearchBar';

import { Image } from '../types/image';

export default function App() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [largeImageURL, setLargeImageURL] = useState<string>('');

  useEffect(() => {
    if (searchValue.trim() === '') {
      return;
    }

    const fetchImages = async () => {
      try {
        setLoader(true);
        setError(null);

        const response = await getImages(searchValue, page);
        const { results: newImages, total } = response;
        
        if (newImages.length === 0) {
          toast.error('No images found. Try another query.');
          setImages([]);
        } else {
          const totalImages = total;
          const totalPages = Math.ceil(totalImages / 12);
          setImages(prevState => [...prevState, ...newImages]);
          setTotalPages(totalPages);
        }
      } catch (error) {
        setError('Failed to load images');
        console.log(error);
        setImages([]);
      } finally {
        setLoader(false);
      }
    };
    fetchImages();
  }, [searchValue, page]);

  const handleSearch = (query: string) => {
    if (query === searchValue) {
      setPage(1);
    } else {
      setSearchValue(query);
      setImages([]);
      setPage(1);
      setTotalPages(0);
      setError(null);
    }
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const openModal = (largeImageURL: string) => {
    setLargeImageURL(largeImageURL);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    < >
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loader && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!error && images.length > 0 && (
        <ImageGallery images={images} showModal={openModal} />
      )}
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      <Toaster position="top-right" />
      {modalOpen && (
        <ImageModal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          largeImageURL={largeImageURL}
        />
      )}
    </>
  );
};

