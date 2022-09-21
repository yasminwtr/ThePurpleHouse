import { useEffect, useState } from 'react';
import { UploadImage } from './ModalImage'
import { useLocation } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import api from 'api';

export const Carousel = () => {

  const location = useLocation();
  const idWorker = location.state.workerId

  const [image, setImage] = useState([])

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    }
  ];

  const showImage = async () => {
    try {
      const response = await api.get(`/getImageWorker/${idWorker}`, { idWorker: idWorker });

      setImage(response.data)

    } catch (error) {
      console.log('error', error);
    }
  }

  const log = () => console.log('image', image);

  useEffect(() => {
    showImage()
  }, [])

  return (
    <div className='gallery'>

      {/* {image.map((image, index) => (<img key={index} src={image.img} width={104} />))} */}

      <p id='title-blocks'>Galeria de serviços</p>
      {/* <button onClick={log}>OOOOOOIIIII</button> */}

      <UploadImage />

      <ImageGallery items={images} className='carousel' sizes={10} />
      {/* {image.map((image, index) => (<img key={index} src={image.img} width={104} />))} */}

    </div>
  )
}

