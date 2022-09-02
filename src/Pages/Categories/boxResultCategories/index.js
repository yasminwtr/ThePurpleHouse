import React, { useState, useEffect } from 'react'
import './styles.css'
import api from '../../../api'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TuneIcon from '@mui/icons-material/Tune';
import FilterWorkers from './filterWorkers';

const ResultCategories = props => {
  const { category } = props;
  const [workers, setWorkers] = useState([])
  const navigate = useNavigate()

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");

  const getWorkers = async () => {
    try {
      const response = await api.get(`/workersByCategory/${category.idservice}`);
      setWorkers(response.data)
    } catch (error) {
      setWorkers([])
    }
  }

  useEffect(() => {
    getWorkers()
  }, [category])

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

  return (
    <div className='page-categories-search'>
      <div className='container-categories-search'>
        <h1 className='title-service-category'>{category.titleservice}</h1>
          <FilterWorkers />
        <div className='list-users-category'>
          {
            workers.map((worker) => {
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
  )
}

export default ResultCategories