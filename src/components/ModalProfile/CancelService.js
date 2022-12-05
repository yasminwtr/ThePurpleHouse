import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import CancelServiceIcon from '@mui/icons-material/HighlightOffRounded'
import api from '../../api';
import AuthContext from 'services/contexts/auth';
import { Button, notification } from 'antd';

const CancelService = (props) => {
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [services, setServices] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function deleteService() {
    try {
      if (selectValue !== 'Serviços' && selectValue !== '') {
        const idPerson = user.idperson;
        const response = await api.delete(`/workers/${idPerson}`, { data: { idService: selectValue } })
        console.log('response', response);
        openNotificationSuccess()
        setShow(false)
        props.getServices()
      } else {
        openNotificationError()
      }
    } catch (error) {
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      let idPerson = user.idperson
      const response = await api.get(`/getServicesFromUser/${idPerson}`);
      setServices(response.data)
    }
    fetchData()
      .catch(console.error);
  }, [])

  const openNotificationSuccess = () => {
    notification["success"]({
      message: 'Serviço cancelado',
      duration: 2,
      placement: 'top',
    });
  };

  const openNotificationError = () => {
    notification["error"]({
      message: 'Selecione um serviço para cancelar',
      duration: 2,
      placement: 'top',
      style: {
        width: 400,
      },
    });
  };

  return (
    <div>
      <p id='options-text' onClick={handleShow}><CancelServiceIcon sx={{ fontSize: 20, marginRight: 0.5 }} /> Cancelar</p>

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Cancelar serviço</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Ao cancelar um serviço o seu perfil na categoria específica vai ser excluído.</p>

          <Form.Select
            autoFocus
            value={selectValue}
            onChange={e => setSelectValue(e.target.value)}
          >
            <option>Serviços</option>
            {
              services.map((item) => {
                return (
                  <option key={item.idservice} value={item.idservice}>{item.titleservice}</option>
                )
              })
            }
          </Form.Select>
        </Modal.Body>

        <Modal.Footer>
          <Button id='delete-button-modals-profile' onClick={() => deleteService()}>
            Cancelar serviço
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CancelService; 