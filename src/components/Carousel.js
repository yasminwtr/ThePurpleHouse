import { useEffect, useState } from 'react';
import { UploadImage } from './ModalImage'
import { useLocation } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import api from 'api';

export const Carousel = () => {
  const location = useLocation();
  const idWorker = location.state.workerId

  const [image, setImage] = useState([])

  const showImage = async () => {
    try {
      const response = await api.get(`/getImageWorker/${idWorker}`, { idWorker: idWorker });

      setImage(response.data.map((image) => {
        return { original: image.img, thumbnail: image.img }
      }))

    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    showImage()
  }, [image])

  return (
    <div className='gallery'>

      <p id='title-blocks'>Galeria de serviços</p>

      <UploadImage />

      <ImageGallery items={image} className='carousel' sizes={10} />

    </div>
  )
}

