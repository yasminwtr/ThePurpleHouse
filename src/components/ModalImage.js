import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { UploadOutlined } from '@ant-design/icons';
import '../../src/Pages/WorkerProfile/styles.css'
import { Button, Upload } from 'antd';

export const UploadImage = (props) => {

  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>

      <Button onClick={handleShow} icon={<UploadOutlined />}>Adicionar Imagens</Button>

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
          <Form>
            <form enctype="multipart/form-data">
              <Form.Group className="mb-3">
                <Form.Label>Adicione até 10 fotos de serviços já realizados.</Form.Label>
                {/* <Form.Control onChange={(e) => setImage(e.target.files[0])} type="file" multiple accept='.png, .jpeg, .jpg' /> */}
                {/* <Form.Control type="file" multiple accept='.png, .jpeg, .jpg' /> */}
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture"

                  className="upload-list-inline"
                >
                  <Button icon={<UploadOutlined />}>Escolher Arquivos</Button>
                </Upload>
              </Form.Group>
            </form>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success">
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}