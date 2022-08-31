import React, { useState, useEffect } from 'react'
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import ResultCategories from './boxResultCategories'
import Grid from '@mui/material/Unstable_Grid2';
import api from '../../../api'
import PlaceIcon from '@mui/icons-material/Place';
import 'animate.css'

function Categories() {
  const [showElement, setShowElement] = useState(false)
  const showOrHide = () => setShowElement(true)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [services, setServices] = useState([])

  useEffect(() => {
    selectedCategory != null ? setShowElement(true) : setShowElement(false)
  }, [selectedCategory])

  async function getServices() {
    try {
      const response = await api.get(`/services`);
      return setServices(response.data)
    } catch (error) {
      console.log(error);
      setServices([])
    }
  }

  useEffect(() => {
    getServices()
  }, [])

  return (
    <body>
      <div className="page">
        <div onClick={() => showOrHide} >
          {showElement ? <p className="animate__animated animate__fadeInLeft">
            <ResultCategories category={selectedCategory} />
          </p> : null}
        </div>
        <div className={showElement ? "container-categories-side" : "container-categories"}>
          <h1 className="titleContainerCategories">
            Selecione a categoria do serviço que está procurando
          </h1>
          <Grid container spacing={2} columns={{ xs: 2, sm: 1, md: 8 }}>
            {services.map((category, index) => (
              <Grid className="grid-categories" xs={2} key={index}>
                <Col xs={8} onClick={() => setSelectedCategory(category)} className={`boxCategories ${selectedCategory?.idservice === category.idservice ? 'boxSelected' : null}`}>
                  <img className='imgBoxCategories' src={category.icon} width={64} />
                  <p>{category.titleservice}</p>
                  <p className='p-boxCategories'>Ver mais</p>
                </Col>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </body>
  );
}

export default Categories;