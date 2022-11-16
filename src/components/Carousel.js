import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import defaultimage from '../assets/img/defaultimage.PNG'
import api from 'api';
import { UploadImage } from './UploadImages';

export const Carousel = () => {
  const location = useLocation();
  const idWorker = location.state.workerId

  const [image, setImage] = useState([])

  const defaultImage = [
    {
      original: defaultimage,
    },
  ];

  const getWorkerImages = async () => {
    if (image.length <= 5) {
      try {
        const response = await api.get(`/getImageWorker/${idWorker}`, { idWorker: idWorker });
        // console.log('response @ getWorkerImages', response);
        // console.log('response @ getWorkerImagessssssss teste', response.data.idimage);
        // console.log('response @ getWorkerImagessssssss teste2', response.img);
        


        setImage(response.data.map((image) => {
          return {
            original: image.img,
            thumbnail: image.img,
            idimage: image.idimage
          }
        }))

        console.log('image @get Worker Images ',[image]);

        

      } catch (error) {
        console.log('error', error);
      }
    } else {
      return
    }
  }

  useEffect(() => {
    getWorkerImages()
  }, [])

  return (
    <div className='carousel'>
      <UploadImage image={image} getWorkerImages={() => getWorkerImages()} />

      {image != '' ?
        <ImageGallery items={image} sizes={10} />
        :
        <ImageGallery items={defaultImage} sizes={10} />
      }
    </div>
  )
}

