import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, notification } from 'antd';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ReportIcon from '@mui/icons-material/ReportGmailerrorredRounded'

const DenounceWorker = (props) => {
  const [show, setShow] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCloseSuccess = () => setShowSuccess(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseSecondModal = () => setShowSecondModal(false);
  const handleShowSecondModal = () => setShowSecondModal(true);
  
  const openNotification = () => {
    notification["success"]({
      message: 'Usuário denunciado',
      duration: 2,
      placement: 'top',
      description:
        'A conversa foi finalizada.',
    });
    setShowSecondModal(false)
    setShow(false)
  };

  return (
    <div>
      <label id='label-more-options' onClick={handleShow}><ReportIcon sx={{ fontSize: 22, marginRight: 0.5 }}/> Denunciar</label>

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Denunciar usuário</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Você tem certeza que deseja denunciar esse usuário?
        </Modal.Body>

        <Modal.Footer>
          <Button id='delete-button-modals-profile' onClick={handleShowSecondModal}>
            Denunciar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showSecondModal}
        onHide={handleCloseSecondModal}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Form className='m-3'>
          <Form.Group>

            <Form.Select
              autoFocus
              className='modal-body '

            >
              <option>Selecione o motivo da denúncia</option>
              <option>a</option>
              <option>b</option>
              <option>c</option>

            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 mt-3">
            <Form.Label>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Form.Label>

            <Form.Control
              as="textarea"
              rows={5}
              maxLength={300}
              autoFocus
            />
          </Form.Group>
        </Form>

        <Modal.Footer>
          <Button id='close-button-modals-profile' onClick={() => handleCloseSecondModal()}>
            Cancelar
          </Button>
          <Button id='delete-button-modals-profile' onClick={openNotification}>
            Denunciar
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default DenounceWorker;