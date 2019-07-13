import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from '../../consts/photos'

const ImageGallery = ({ handleOpenModal, onClose, currentIndex, openModal }) => {
  return (
    <Fragment>
      <div className='headline'>
        <h1 className='inverse'>Gallery</h1>
      </div>
      <Gallery photos={photos} onClick={handleOpenModal} />
      <ModalGateway>
        {openModal ? (
          <Modal onClose={onClose}>
            <Carousel
              currentIndex={currentIndex}
              views={photos.map(image => ({
                ...image,
                srcset: image.srcSet,
                caption: image.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Fragment>
  )
}

ImageGallery.propTypes = {
  currentIndex: PropTypes.number,
  handleOpenModal: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
}

export default ImageGallery
