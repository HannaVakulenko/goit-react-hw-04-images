import { GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ children }) => {
  return <GalleryList>{children}</GalleryList>;
};

ImageGallery.propTypes = {
  children: PropTypes.any.isRequired,
};
