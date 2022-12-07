import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, notification } from 'antd';
import { useLocation } from 'react-router-dom';
import AuthContext from '../services/contexts/auth'
import axios from 'axios';
import api from 'api'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useEffect } from 'react';

export const UploadImage = (props) => {

  const { image, getWorkerImages } = props

  const location = useLocation();
  const idWorker = location.state.workerId

  const { user } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [listImages, setListImages] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  console.log(listImages);

  const attemptSave = async () => {
    if (listImages.length >= 1 && image.length + listImages.length <= 5) {
      listImages.forEach(async image => {
        const data = new FormData();
        data.append("image", image);

        let imageUrl = "";

        await axios({
          method: "post",
          url: "https://api.imgbb.com/1/upload?key=260510af5b0c0bace7d588642e391256",
          data: data,
          headers: { "Content-Type": "multipart/form-data" },
        }).then((response) => {
          imageUrl = response.data.data.url
        }).catch((response) => {
        });

        await saveImage(imageUrl)
          .then(() => props.getWorkerImages());
        if (imageUrl) {
          openNotificationSuccess()
          setShow(false)
        }
      });
    } else if (listImages.length === 0) {
      openNotificationValidationError()

    } else if (image.length + listImages.length > 5) {
      openNotificationLimitError()
    }
  };

  const saveImage = async (imageUrl) => {
    if (imageUrl) {
      try {
        return await api.post(`/postImage`, { img: imageUrl, idWorker: idWorker });
      } catch (error) {
        openNotificationError()
        setShow(false)
      }
    }
  }

  const deleteCarouselImage = async (id) => {
    try {
      await api.delete(`/deleteCarouselImage/${id}`);
      props.getWorkerImages();
      openNotificationDeleteSuccess()
    } catch (error) {
    }
  }

  const openNotificationSuccess = () => {
    notification["success"]({
      message: 'Imagem adicionada com sucesso.',
      duration: 2,
      placement: 'top'
    });
  };

  const openNotificationDeleteSuccess = () => {
    notification["success"]({
      message: 'Imagem deletada.',
      duration: 2,
      placement: 'bottom'
    });
  };

  const openNotificationError = () => {
    notification["error"]({
      message: 'Não foi possível adicionar a imagem. Por favor, tente novamente mais tarde.',
      duration: 2,
      placement: 'top'
    });
  };

  const openNotificationLimitError = () => {
    notification["error"]({
      message: 'Somente 5 imagens podem ser adicionadas na galeria.',
      duration: 2,
      placement: 'bottom'
    });
  };

  const openNotificationValidationError = () => {
    notification["error"]({
      message: 'Selecione no mínimo uma imagem para salvar.',
      duration: 2,
      placement: 'bottom'
    });
  };

  useEffect(() => {
    getWorkerImages()
  }, []);

  return (
    <div>
      {user.idperson == location.state.personWorkerId ?
        <>
          <Button onClick={handleShow} icon={<UploadOutlined />} id='upload-images-button'>
            Adicionar imagens
          </Button>
        </>
        :
        <></>
      }

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Adicionar imagens</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form encType="multipart/form-data"
            type="file" multiple accept='.png, .jpeg, .jpg'
            onChange={(e) => setListImages([e.target.files[0], ...listImages])}
          >
            <Form.Group className="mb-3">
              <Form.Label>Adicione até 5 imagens dos seus serviços:</Form.Label>
              <Upload
                beforeUpload={
                  () => {
                    return false;
                  }
                }

                listType="picture"
                className="upload-list-inline"
                maxCount={5}
              >
                {image.length === 5 || (image.length + listImages.length) === 5 ?
                  <>
                    <Button disabled icon={<UploadOutlined />}>
                    Selecionar arquivos
                    </Button>
                  </>
                  :
                  <>
                    <Button icon={<UploadOutlined />} id='upload-images-button'>
                      Selecionar arquivos
                    </Button>
                  </>
                }
              </Upload>

              {image.length != 0 ?
                <Form.Label className='mt-3'>Imagens adicionadas:</Form.Label>
                :
                <Form.Label className='mt-3'>Você não possui imagens adicionadas na galeria.</Form.Label>
              }

              <div className='container-uploaded-images'>
                {image.map((img) => {
                  return <>
                    <div className='uploaded-images-list'>
                      <img
                        width={40}
                        src={img.original} />
                      <DeleteOutlineIcon
                        onClick={() => deleteCarouselImage(img.idimage)}
                        className='delete-icon ant-btn-icon-only'
                      />
                    </div>
                  </>
                })}
              </div>

            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => attemptSave()} id='save-button-modals-profile'>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}