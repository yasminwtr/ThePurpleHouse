import React, { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { useLocation } from 'react-router-dom';
import AuthContext from '../services/contexts/auth'
import axios from 'axios';
import api from 'api'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const UploadImage = (props) => {

  const { image } = props

  const location = useLocation();
  const idWorker = location.state.workerId

  const { user } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [listImages, setListImages] = useState([])
  const [file, setFile] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  const attemptSave = async () => {

    if (image.length < 4) {

      listImages.forEach(image => {
        const data = new FormData();
        data.append("image", image);

        axios({
          method: "post",
          url: "https://api.imgbb.com/1/upload?key=260510af5b0c0bace7d588642e391256",
          data: data,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then((response) => {
            response = response.data.data.url

            setFile(response)

            saveImage()
          })
          .catch((response) => {
            console.log('response @ modalImage', response);
          });
      });
    }
    props.getWorkerImages();
  };

  const saveImage = async () => {
    if ((file.length) > 0) {
      try {
        await api.post(`/postImage`, { img: file, idWorker: idWorker });
      } catch (error) {
        console.log('error', error);
      }
    }
  }

  return (
    <div>
      {user.idperson == location.state.personWorkerId ?
        <>
          <Button onClick={handleShow} icon={<UploadOutlined />}>Adicionar Imagens</Button>
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
          <Modal.Title>Adicionar Imagens</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form encType="multipart/form-data"
            type="file" multiple accept='.png, .jpeg, .jpg'
            onChange={(e) => setListImages([e.target.files[0], ...listImages])}
          >
            <Form.Group className="mb-3">
              <Form.Label>Adicione até 5 imagens de serviços já realizados</Form.Label>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                className="upload-list-inline"
                maxCount={5}
              >
                <Button type='submit' disabled={listImages.length === 5} icon={<UploadOutlined />}>
                  Escolher Arquivos
                </Button>
              </Upload>

              <div className='container-uploaded-images'>
                {image.map((img) => {
                  return <>
                    <div className='uploaded-images-list'>
                      <img
                        width={40}
                        src={img.original} />
                      <DeleteOutlineIcon
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
          <Button onClick={() => attemptSave()} variant="success">
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}