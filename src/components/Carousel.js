import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import defaultimage from '../assets/img/defaultimage.PNG'
import api from 'api';

export const Carousel = () => {
  const location = useLocation();
  const idWorker = location.state.workerId

  const [image, setImage] = useState([])

  const defaultImage = [
    {
      original: defaultimage,
    },
  ];

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
  }, [])

  return (
    <div className='gallery'>
      {image != '' ?
        <ImageGallery items={image} className='carousel' sizes={10} />
        :
        <ImageGallery items={defaultImage} className='carousel' sizes={10} />
      }
    </div>
  )
}

