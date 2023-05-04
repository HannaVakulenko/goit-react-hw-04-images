import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { imagesAPI } from 'services/PixabayAPI';
import { Toaster } from 'react-hot-toast';
import { Layout } from './Layout/Layout';
import { Header } from './Header/Header';
import { Section } from './Section/Section';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

const ERROR_MSG = 'An error occurred, please try again later...';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [imageTags, setImageTags] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchImages = async (searchText, page) => {
    try {
      setLoading(true);
      setError(null);

      const fetchedImages = await imagesAPI(searchText, page);
      setImages(prevImages => [...prevImages, ...fetchedImages.hits]);

      setTotal(fetchedImages.totalHits);
    } catch (error) {
      setError(ERROR_MSG);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!searchText) {
      return;
    }

    fetchImages(searchText, page);
  }, [searchText, page]);

  const handleSubmit = searchValue => {
    setSearchText(searchValue);
    setImages([]);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModal = (largeImageURL, tags) => {
    setIsModalOpen(prevState => !prevState);
    setLargeImageURL(largeImageURL);
    setImageTags(tags);
  };

  return (
    <Layout>
      <Header>
        <Searchbar onSubmit={handleSubmit} />
      </Header>
      <Section>
        {!searchText && (
          <h2 style={{ textAlign: 'center', marginTop: '25%' }}>
            Let's try to find the image according to your request
          </h2>
        )}
        <ImageGallery>
          <ImageGalleryItem images={images} toggleModal={toggleModal} />
        </ImageGallery>
        {error && <h2>{error}</h2>}

        {total === 0 && (
          <h2 style={{ textAlign: 'center' }}>
            Sorry, there are no images matching your request "{searchText}
            "...
          </h2>
        )}

        {total / 12 > page && !loading && (
          <Button text="Load more" onClick={onLoadMore} />
        )}
      </Section>
      {loading && <Loader />}

      {isModalOpen && (
        <Modal
          imageURL={largeImageURL}
          imageTags={imageTags}
          toggleModal={toggleModal}
        />
      )}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />
      <GlobalStyle />
    </Layout>
  );
};
