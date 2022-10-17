import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import axios from 'axios';
import api from 'api'
import { useLocation } from 'react-router-dom';
import AuthContext from '../services/contexts/auth'

export const UploadImage = (props) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const idWorker = location.state.workerId
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState([])
  const [file, setFile] = useState([]);

  const attemptSave = async () => {
    const data = new FormData();
    data.append("image", image);

    axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload?key=7313c33c5080a1cfde51ee1a33889274",
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
  };

  const saveImage = async () => {
    try {
      const response = await api.post(`/postImage`, { img: file, idWorker: idWorker });
      console.log('file @ saveImage', file);
    } catch (error) {
      console.log('error', error);
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
          <Form encType="multipart/form-data" onChange={(e) => setImage(e.target.files[0])} type="file" multiple accept='.png, .jpeg, .jpg'>
            <Form.Group className="mb-3">
              <Form.Label>Adicione até 5 imagens de serviços já realizados</Form.Label>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                className="upload-list-inline"
              >
                <Button type='submit' icon={<UploadOutlined />}>Escolher Arquivos</Button>
              </Upload>
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