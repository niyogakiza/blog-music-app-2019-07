import React, { Fragment, useCallback, useState } from 'react'
import { hot } from 'react-hot-loader'
import ImageGallery from './Gallery'
import Section from '../shared/Section'
import Intro from "../shared/Intro";
import Preloader from "../shared/Preloader";
import Navigation from "../shared/Navigation";

const main = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setOpenModal(true)
  }, [])

  const handleCloseModal = () => {
    setCurrentImage(0)
    setOpenModal(false)
  }
  return (
    <Fragment>
      {/*<Preloader/>*/}
      <Navigation />
      <Intro />
      <Section id='gallery' className='container-fluid wrapper'>
        <div className='container-fluid wrapper'>
          <ImageGallery
            currentIndex={currentImage}
            onClose={handleCloseModal}
            handleOpenModal={handleOpenModal}
            openModal={openModal}
          />
        </div>
      </Section>
    </Fragment>
  )
}

export default hot(module)(main)
