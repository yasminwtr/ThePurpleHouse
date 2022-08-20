import React, { useState, useEffect } from 'react';
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import CancelServiceIcon from '@mui/icons-material/HighlightOffRounded'
import api from "../../../../api";

const CancelService = (props) => {
    const [show, setShow] = useState(false);
    const [selectValue, setSelectValue] = useState(''); 
    const [services, setServices] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function deleteService() {
      try {
          if (selectValue !== 'Serviços') {
          const idPerson = 1;
          const response = await api.delete(`/workers/${idPerson}`, {data: {idService: selectValue}})
          console.log('response', response)
          
          } else {
          console.log('campo nao preenchiddddo');
          }
      } catch (error) {

      }
    }
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await api.get('/services');
        setServices(response.data)
      }
      fetchData()
        .catch(console.error);
    }, [])

    return(
        <div>
          <p id='options-text' onClick={handleShow}><CancelServiceIcon sx={{ fontSize: 20 }}/> Cancelar serviço</p>

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
        </div>
    )
}

export default CancelService; 