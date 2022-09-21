import { useEffect, useState } from 'react';
import { UploadImage } from './ModalImage'
import { useLocation } from 'react-router-dom';

import api from 'api';

export const Carousel = () => {

  const location = useLocation();
  const idWorker = location.state.workerId

  const [image, setImage] = useState([])

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


      {/* {image.forEach(image => (<p>{image.img}</p>))} */}
      {image.map((image, index ) => (<img key={index} src={image.img} width={104} />))}

      {/* <img className='imgBoxCategories' src={category.icon} width={64} /> */}

      <p>aaaaaaaaaaaaaaaa</p>
      {/* 
      {services.map((category, index) => (
              <Grid className="grid-categories" xs={2} key={index}>
                <Col xs={8} onClick={() => setSelectedCategory(category)} className={`boxCategories ${selectedCategory?.idservice === category.idservice ? 'boxSelected' : null}`}>
                  <img className='imgBoxCategories' src={category.icon} width={64} />
                  <p>{category.titleservice}</p>
                  <p className='p-boxCategories'>Ver mais</p>
                </Col>
              </Grid>
            ))} */}


      <p id='title-blocks'>Galeria de serviços</p>
      <button onClick={log}>OOOOOOIIIII</button>


      <UploadImage />

      {
        [...Array(5)].map((_, index) => {
          // const ratingValue = index + 1;

          return (
            <section className='carousel' aria-label='Gallery'>
              <ol className='carousel__viewport'>
                <li id='carousel__slide1' tabIndex='0' className='carousel__slide'>
                  <div className='carousel__snapper'>
                  {image.map((image, index ) => (<img key={index} src={image.img} width={104} />))}
                    <a className='carousel__prev'>Go to last slide</a>
                    <a className='carousel__next'>Go to next slide</a>
                  </div>
                </li>
              </ol>
            </section>
          )
        })
      }

      {/* {
        [...Array(5)].map((_, index) => {
          const ratingValue = index + 1;

          return (
            <label key={index}>
              <FaStar color={ratingValue <= Math.floor(parseInt(averageRating.avg)) ? '#fccc3e' : '#d9d9d9'} size={24} />
            </label>
          )
        })
      } */}

      <section className='carousel' aria-label='Gallery'>
        <ol className='carousel__viewport'>
          <li id='carousel__slide1' tabIndex='0' className='carousel__slide'>
            <div className='carousel__snapper'>
              <a href='#carousel__slide4' className='carousel__prev'>Go to last slide</a>
              <a href='#carousel__slide2' className='carousel__next'>Go to next slide</a>
            </div>
          </li>

          <li id='carousel__slide2' tabIndex='0' className='carousel__slide'>
            <div className='carousel__snapper'></div>
            <a href='#carousel__slide1' className='carousel__prev'>Go to previous slide</a>
            <a href='#carousel__slide3' className='carousel__next'>Go to next slide</a>
          </li>

          <li id='carousel__slide3' tabIndex='0' className='carousel__slide'>
            <div className='carousel__snapper'></div>
            <a href='#carousel__slide2' className='carousel__prev'>Go to previous slide</a>
            <a href='#carousel__slide4' className='carousel__next'>Go to next slide</a>
          </li>

          <li id='carousel__slide4' tabIndex='0' className='carousel__slide'>
            <div className='carousel__snapper'></div>
            <a href='#carousel__slide3' className='carousel__prev'>Go to previous slide</a>
            <a href='#carousel__slide1' className='carousel__next'>Go to first slide</a>
          </li>
        </ol>

        <aside className='carousel__navigation'>
          <ol className='carousel__navigation-list'>
            <li className='carousel__navigation-item'>
              <a href='#carousel__slide1' className='carousel__navigation-button'>Go to slide 1</a>
            </li>

            <li className='carousel__navigation-item'>
              <a href='#carousel__slide2' className='carousel__navigation-button'>Go to slide 2</a>
            </li>

            <li className='carousel__navigation-item'>
              <a href='#carousel__slide3' className='carousel__navigation-button'>Go to slide 3</a>
            </li>

            <li className='carousel__navigation-item'>
              <a href='#carousel__slide4' className='carousel__navigation-button'>Go to slide 4</a>
            </li>
          </ol>
        </aside>
      </section>
    </div>
  )
}

