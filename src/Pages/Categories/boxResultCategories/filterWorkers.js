import React, { useState, useEffect } from 'react';
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TuneIcon from '@mui/icons-material/Tune';
import axios from 'axios';
import { SpinnerAnimation } from 'components/SpinnerAnimation';

const FilterWorkers = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");

  useEffect(() => {
    if (selectedUf === "0") {
      return;
    }
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        setCities(response.data);
      });
  });

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response) => {
        setUfs(response.data);
      });
  }, [selectedUf]);

  function handleSelectUf(event) {
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(event) {
    const city = event.target.value;
    setSelectedCity(city);
  }

  // se a localização seleciona == localização do trabalhador

  return (
    <div>
      <p className='btn-filter-workers' onClick={handleShow}>
        <TuneIcon sx={{ fontSize: 22, marginRight: 0.5 }} />
        Filtrar
      </p>
      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        {/* <Modal.Header closeButton>
          <Modal.Title>Selecione cidade e estado</Modal.Title>
        </Modal.Header> */}

        <Modal.Body>
          <Form>
            <Row className="g-2 mb-3 row-localization">
              <Col md={3}>
                <Form.Select name="uf" id="uf" onChange={handleSelectUf}>
                  <option value="0">Estado</option>
                  {ufs.map((uf) => (
                    <option key={uf.id} value={uf.sigla}>{uf.sigla}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col md>
                <Form.Select name="City" id="City" value={selectedCity} onChange={handleSelectCity}>
                  <option value="0">Cidade</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.nome}>
                      {city.nome}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <SpinnerAnimation />
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default FilterWorkers;