import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import api from 'api'
import 'animate.css'
import FilterWorkers from 'components/Categories/filterWorkers';

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
    <div className="categories">
      <div onClick={() => showOrHide} >
        {showElement ?
          <p className="animate__animated animate__fadeInLeft">
            <FilterWorkers
              close={() => setShowElement(false)}
              showElement category={selectedCategory} />
          </p>
          :
          null}
      </div>
      <div className={showElement ? "container-categories-side" : "container-categories"}>
        <h1 className="animate__animated animate__fadeIn">
          Selecione a categoria do serviço que está procurando
        </h1>
        <Container className='animate__animated animate__fadeIn' >
          {services.map((category, index) => (
            <Row key={index}>
              <Col onClick={() => setSelectedCategory(category)}
                className={`boxCategories 
              ${selectedCategory?.idservice === category.idservice ?
                    'boxSelected'
                    :
                    null}`}>
                <img src={category.icon} width={64} />
                <p className='title-category'>{category.titleservice}</p>
                <p>Ver mais</p>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </div>
  );
}

export default Categories;