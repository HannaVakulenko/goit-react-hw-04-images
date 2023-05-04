import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent, ModalImage } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ imageURL, imageTags, toggleModal }) => {
  useEffect(() => {
    const handleClickESC = e => {
      if (e.code === `Escape`) {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleClickESC);
    return () => window.removeEventListener('keydown', handleClickESC);
  }, [toggleModal]);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  //ModalBackdrop, ModalContent, ModalImage

  return createPortal(
    <ModalBackdrop onClick={onBackdropClick}>
      <ModalContent>
        <ModalImage src={imageURL} alt={imageTags} />
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  imageURL: PropTypes.string,
  imageTags: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleClickESC);
//   }

//   handleClickESC = e => {
//     if (e.code === `Escape`) {
//       this.props.toggleModal();
//     }
//   };

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleClickESC);
//   }

//   //ModalBackdrop, ModalContent, ModalImage
//   render() {
//     const { imageURL, imageTags, toggleModal } = this.props;
//     return createPortal(
//       <ModalBackdrop onClick={toggleModal}>
//         <ModalContent>
//           <ModalImage src={imageURL} alt={imageTags} />
//         </ModalContent>
//       </ModalBackdrop>,
//       modalRoot
//     );
//   }
// }
