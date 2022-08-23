import React, { useState, useEffect } from 'react'
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import ResultCategories from './boxResultCategories'
import Grid from '@mui/material/Unstable_Grid2';
import api from '../../../api'

function Categories() {
  const [showElement, setShowElement] = useState(false)
  const showOrHide = () => setShowElement(true)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [services, setServices] = useState([])

  useEffect(() => {
    selectedCategory != null ? setShowElement(true) : setShowElement(false)
  }, [selectedCategory])

  async function getServices(idService) {
    try {
      const response = await api.get(`/services`);
      console.log('response.data @ categories',response.data);
      return setServices(response.data)
    } catch (error) {
      console.log(error);
      setServices([])
    }
  }

  useEffect(() => {
    getServices()
    console.log('getServices',getServices());
  }, [])

  return (
    <body>
      <div className="page">
        {showElement ?
        <>
        <div onClick={() => showOrHide} >
          {showElement ? <p>
            <ResultCategories />
          </p> : null}
        </div>
        <div className="container-categories-side">
          <h1 className="titleContainerCategories">
            Selecione a categoria do serviço que está procurando
          </h1>
          <Grid container spacing={2} columns={{ xs: 2, sm: 1, md: 8 }}>
            {services.map((category, index) => (
              <Grid className="grid-categories" xs={2} key={index}>
                <Col xs={8} onClick={() => setSelectedCategory(category.idservice)} className={`boxCategories ${selectedCategory === category.idservice ? 'boxSelected' : null}`}>
                  <img className='imgBoxCategories' src={category.icon} width={64} />
                  <p>{category.titleservice}</p>
                  <p className='p-boxCategories'>Ver mais</p>
                </Col>
              </Grid>
            ))}
          </Grid>
        </div>
        </>
        :
        <>
              <div onClick={() => showOrHide} >
          {showElement ? <p>
            <ResultCategories />
          </p> : null}
        </div>
        <div className="containerCategories">
          <h1 className="titleContainerCategories">
            Selecione a categoria do serviço que está procurando
          </h1>
          <Grid container spacing={2} columns={{ xs: 2, sm: 1, md: 8 }}>
            {services.map((category, index) => (
              <Grid className="grid-categories" xs={2} key={index}>
                <Col xs={8} onClick={() => setSelectedCategory(category.idservice)} className={`boxCategories ${selectedCategory === category.idservice ? 'boxSelected' : null}`}>
                  <img className='imgBoxCategories' src={category.icon}  width={64}/>
                  <p>{category.titleservice}</p>
                  <p className='p-boxCategories'>Ver mais</p>
                </Col>
              </Grid>
            ))}
          </Grid>
        </div>  
        </>}
      </div>
    </body>
  );
}

export default Categories;