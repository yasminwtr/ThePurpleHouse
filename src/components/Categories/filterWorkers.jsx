import React, { useState, useEffect, useContext } from 'react';
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
import AverageRating from 'components/Reviews/AverageRating';
import RefreshIcon from '@mui/icons-material/Refresh';
import ClearIcon from '@mui/icons-material/Clear';
import { notification, Image, Avatar } from 'antd';
import AuthContext from 'services/contexts/auth';
import ProfileIcon from "../../assets/img/user2.png";

const FilterWorkers = (props) => {
  const { category, close } = props;
  const navigate = useNavigate()

  const { user } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");
  const [filteredWorkers, setFilteredWorkers] = useState([])
  const [workers, setWorkers] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  }, [selectedUf]);

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
      setWorkers(response.data)
    } catch (error) {
      setWorkers([])
    }
  }

  const filterWorkers = () => {
    const filterResult = workers.filter(worker => { return worker.city === selectedCity && worker.localization === selectedUf })
    setFilteredWorkers(filterResult)

    if (filterResult.length === 0) {
      return notification["error"]({
        message: 'Não há trabalhadores nessa localidade',
        duration: 2,
        placement: 'top',
      })
    } else setShow(false)
  }

  useEffect(() => {
    getWorkers()
  }, [category]);

  const refreshFilter = () => {
    setFilteredWorkers([])
  }

  return (
    <div className='filterWorkers'>
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
                <Form.Select className="form-select-filter" name="uf" id="uf" onChange={handleSelectUf}>
                  <option value="0">Estado</option>
                  {ufs.map((uf) => (
                    <option key={uf.id} value={uf.sigla}>
                      {uf.sigla}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col md>
                <Form.Select className="form-select-filter" name="City" id="City" value={selectedCity} onChange={handleSelectCity}>
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

      <div className='container-categories-search'>
        <ClearIcon className="button-refresh" onClick={() => close()} />
        <h1>{category.titleservice}</h1>
        <div className='btns-categories-search'>
          <button className='btn-filter-workers' onClick={handleShow}>
            <TuneIcon sx={{ fontSize: 22, marginRight: 0.5 }} />
            Filtrar
          </button>
          <button onClick={() => refreshFilter()} className="button-refresh">
            <RefreshIcon />
          </button>
        </div>
        <div className='list-users-category'>
          {
            (filteredWorkers.length ? filteredWorkers : workers).map((worker) => {
              console.log(worker);
              return (
                <div className='info-user' key={worker.idworker} onClick={() => navigate('/WorkerProfile', {
                  state: {
                    workerId: worker.idworker,
                    personWorkerId: worker.idperson,
                    firstName: worker.firstname,
                    lastName: worker.lastname,
                    service: worker.titleservice,
                    email: worker.email,
                    phone: worker.phonenumber,
                    birthdate: worker.birthdate,
                    city: worker.city,
                    cityState: worker.localization,
                    price: worker.priceservice,
                    description: worker.descriptionservice,
                    whatsapp: worker.whatsapp,
                    workerImg: worker.profilepicture
                  }
                })}>
                  <div className='info-user-nameimg'>
                    {
                      worker.profilepicture ?
                        <Avatar
                          size={38}
                          src={worker.profilepicture}
                        />
                        :
                        <Avatar
                          size={38}
                          src={ProfileIcon}
                          
                        />
                    }
                    <span id='worker-name-categories'>{worker.firstname}</span>
                  </div>
                  <div className='average-rating'>
                    <AverageRating rating={worker.avg} />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default FilterWorkers;