import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Grid from '@mui/material/Unstable_Grid2';
import Container from 'react-bootstrap/Container';
import api from 'api'
import 'animate.css'
import FilterWorkers from 'components/Categories/filterWorkers';
import ClearIcon from '@mui/icons-material/Clear';


function Categories(props) {
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
    <div className='categories'>
      <div className="page">
        <div onClick={() => showOrHide} >
          {showElement ? <p className="animate__animated animate__fadeInLeft">
            <ClearIcon className="button-refresh" onClick={() => setShowElement(false)} />
            <FilterWorkers showElement category={selectedCategory} />
          </p> : null}
        </div>
        <div className={showElement ? "container-categories-side" : "container-categories"}>
          <h1 className="title-container-categories animate__animated animate__fadeIn">
            Selecione a categoria do serviço que está procurando
          </h1>
          <Container className='animate__animated animate__fadeIn' >
            {services.map((category, index) => (
              <Row className="grid-categories" key={index}>
                <Col onClick={() => setSelectedCategory(category)} className={`boxCategories ${selectedCategory?.idservice === category.idservice ? 'boxSelected' : null}`}>
                  <img className='imgBoxCategories' src={category.icon} width={64} />
                  <p className='category-titleservice'>{category.titleservice}</p>
                  <p className='p-boxCategories'>Ver mais</p>
                </Col>
              </Row>
            ))}
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Categories;