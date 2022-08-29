import React, { useState, useEffect, useContext } from 'react';
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import CancelServiceIcon from '@mui/icons-material/HighlightOffRounded'
import api from "../../../../api";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AuthContext from '../../../contexts/auth'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CancelService = (props) => {
    const { user } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [selectValue, setSelectValue] = useState(''); 
    const [services, setServices] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseError = () => setShowError(false);
    const handleCloseSuccess = () => setShowSuccess(false);

    async function deleteService() {
      try {
          if (selectValue !== 'Serviços' && selectValue !== '') {
            const idPerson = user.idperson;
            const response = await api.delete(`/workers/${idPerson}`, {data: {idService: selectValue}})
            console.log('response', response);
            setShowSuccess(true)
            setShow(false)
          
          } else {
              setShowError(true)
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

    return(
        <div>
          <p id='options-text' onClick={handleShow}><CancelServiceIcon sx={{ fontSize: 20, marginRight: 0.5 }}/> Cancelar serviço</p>

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
              <Button variant="danger" onClick={() => deleteService()}>
                Cancelar serviço
              </Button>
            </Modal.Footer>
          </Modal>

          <Snackbar open={showError} autoHideDuration={6000} onClose={handleCloseError} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
            <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
              Selecione um serviço para cancelar
            </Alert>
          </Snackbar>

          <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleCloseSuccess} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
            <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%', fontFamily: 'Inter-Regular' }}>
              Serviço cancelado com sucesso
            </Alert>
          </Snackbar> 
        </div>
    )
}

export default CancelService; 