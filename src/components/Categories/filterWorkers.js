import React, { useState, useEffect } from 'react';
import '../../Pages/Categories/styles.css'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TuneIcon from '@mui/icons-material/Tune';
import { SpinnerAnimation } from 'components/SpinnerAnimation';
import axios from 'axios';
import api from 'api';
import { useNavigate } from 'react-router-dom';

const FilterWorkers = (props) => {

  const { category } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");
  const [filteredWorkers, setFilteredWorkers] = useState([])
  const [workers, setWorkers] = useState([])
  const navigate = useNavigate()

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

  const handleSelectUf = (event) => {
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  const handleSelectCity = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
  }

  const getWorkers = async () => {
    try {
      const response = await api.get(`/workersByCategory/${category.idservice}`);
      console.log('response @ getWorkers', response.data);
      setWorkers(response.data)
    } catch (error) {
      setWorkers([])
    }
  }

  const filterWorkers = () => {
    const filterResult = workers.filter(worker => { return worker.city === selectedCity && worker.localization === selectedUf })
    setFilteredWorkers(filterResult)
  }

  useEffect(() => {
    getWorkers()
  }, [category])

  // useEffect(() => {
  //   filterWorkers()
  // }, [selectedCity, ufs])

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Form>
            <Row className="g-2 mb-3 row-localization">
              <Col md={3}>
                <Form.Select name="uf" id="uf" onChange={handleSelectUf}>
                  <option value="0">Estado</option>
                  {ufs.map((uf) => (
                    <option key={uf.id} value={uf.sigla}>
                      {uf.sigla}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col md>
                <Form.Select name="City" id="City" value={selectedCity} onChange={handleSelectCity}>
                  <option value="0">Cidade</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.nome}>{city.nome}</option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </Form>
          <SpinnerAnimation
            functionToRun={() => filterWorkers()}
          />
        </Modal.Body>
      </Modal>

      <div className='page-categories-search'>
        <div className='container-categories-search'>
          <h1 className='title-service-category'>{category.titleservice}</h1>
          <p className='btn-filter-workers' onClick={handleShow}>
            <TuneIcon sx={{ fontSize: 22, marginRight: 0.5 }} />
            Filtrar
          </p>
          <div className='list-users-category'>
            {
              (filteredWorkers.length ? filteredWorkers : workers).map((worker) => {
                return (
                  <div className='info-user-category' key={worker.idworker} onClick={() => navigate('/WorkerProfile', { state: { workerId: worker.idworker, name: worker.fullname, service: worker.titleservice, email: worker.email, phone: worker.phonenumber, birthdate: worker.birthdate, city: worker.city, cityState: worker.localization, price: worker.priceservice, description: worker.descriptionservice, whatsapp: worker.whatsapp } })}>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className='photo-user-profile' alt="Profile" />
                    <p className='name-user-category' >{worker.fullname}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterWorkers;