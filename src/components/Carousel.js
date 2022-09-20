import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { UploadImage } from './ModalImage';

export const Carousel = () => {
  // const props = {
  //   name: "file",
  //   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  //   headers: {
  //     authorization: "authorization-text"
  //   },

  //   onChange(info) {
  //     if (info.file.status !== "uploading") {
  //       console.log(info.file, info.fileList);
  //     }

  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   }
  // };

  return (
    <div className='gallery'>

      <p id='title-blocks'>Galeria de serviços</p>
    
      <UploadImage/>

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

