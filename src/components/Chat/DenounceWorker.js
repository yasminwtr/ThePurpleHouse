import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, notification } from 'antd';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ReportIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import api from 'api';
import AuthContext from '../../services/contexts/auth'

const DenounceWorker = (props) => {
  const { user } = useContext(AuthContext);
  const { chat } = props

  const [show, setShow] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedOption, setOptionSelected] = useState(false)
  const [description, setDescription] = useState(false)
  const [messageError, setMessageError] = useState(false)

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

  async function createDenounce() {
    const idWorker = chat.idworker
    if ((selectedOption) != '' && (description) != '') {
      try {
        const response = await api.post('/denounce', { idWorker: idWorker, idPerson: user.idperson, selectedOption, description });
        console.log('response', response)
        openNotification()
      } catch (error) {
        console.log('error @ createDenounce @ denounceWorker', error);
      }
    } else {
      setMessageError('Preencha todos os campos para realizar a denúncia!')
    }
  }

  return (
    <div>
      <label id='label-more-options' onClick={handleShow}><ReportIcon sx={{ fontSize: 22, marginRight: 0.5 }} /> Denunciar</label>

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
              onChange={(event) => setOptionSelected(event.target.value)}
            >
              <option>Selecione o motivo da denúncia</option>
              <option>Perfil suspeito ou falso</option>
              <option>Assédio ou discurso de ódio</option>
              <option>Violência ou danos físicos</option>
              <option>Violação de propriedade</option>

            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 mt-3">
            <Form.Label>Sentimos muito, você pode nos descrever com mais detalhes o que ocorreu?</Form.Label>

            <Form.Control
              as="textarea"
              rows={5}
              maxLength={300}
              autoFocus
              onChange={(event) => setDescription(event.target.value)}

            />
          </Form.Group>

          <label className='message-error-denounce' >{messageError}</label>
          
        </Form>

        <Modal.Footer>
          <Button id='close-button-modals-profile' onClick={() => handleCloseSecondModal()}>
            Cancelar
          </Button>
          <Button id='delete-button-modals-profile' onClick={() => createDenounce()}>
            Denunciar
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default DenounceWorker;