import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const DenounceWorker = (props) => {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


  const [show, setShow] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  const handleCloseSuccess = () => setShowSuccess(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseSecondModal = () => setShowSecondModal(false);
  const handleShowSecondModal = () => setShowSecondModal(true);

  return (
    <div>
      <Button id='denounce-work-chat-button' onClick={handleShow}>Denunciar</Button>

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
          <Button onClick={() => handleCloseSecondModal()} className='btn-denounce-cancel'>
            Cancelar
          </Button>
          <Button className='btn-denounce' onClick={() => setShowSuccess(true)}>
            Denunciar
          </Button>
        </Modal.Footer>
      </Modal>

      <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleCloseSuccess} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
          Denúncia realizada
        </Alert>
      </Snackbar>

    </div>
  )
}

export default DenounceWorker;