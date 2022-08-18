import React, { useState } from 'react'
import "./styles.css"
import electrician from '../assets/img/electrician.png'
import clean from "../assets/img/clean.png"
import gardening from "../assets/img/gardening.png"
import baby from "../assets/img/baby.png"
import terapia from '../assets/img/terapia.png'
import marceneiro from '../assets/img/marcenaria.png'
import cozinheiro from '../assets/img/chef.png'
import maquiagem from '../assets/img/maquiagem.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PlaceIcon from '@mui/icons-material/Place';
import ResultCategories from './boxResultCategories'

function Categories() {
  const [showElement, setShowElement] = useState(false)
  const showOrHide = () => setShowElement(true)

  return (
    <body>
      <div className="page">
        <div onClick={() => showOrHide} >
          {showElement ? <p>
            <ResultCategories />
          </p> : null}
        </div>
        <div className="containerCategories">
          <Container className="categories">
            <h1 className="titleContainerCategories">
              Selecione a categoria do serviço que está procurando
            </h1>
            <Row>
              <Col onClick={showOrHide} className="boxCategories"><img src={electrician} />Eletricista</Col>
              <Col onClick={showOrHide} className="boxCategories"><img src={clean} />Diarista</Col>
              <Col onClick={showOrHide} className="boxCategories"><img src={gardening} />Jardinagem</Col>
              <Col onClick={showOrHide} className="boxCategories"><img src={baby} />Babá</Col>
            </Row>
            <Row>
              <Col onClick={showOrHide} className="boxCategories"><img src={terapia} />Fisioterapia</Col>
              <Col onClick={showOrHide} className="boxCategories"><img src={marceneiro} />Marceneiro</Col>
              <Col onClick={showOrHide} className="boxCategories"><img src={cozinheiro} />Cozinheiro</Col>
              <Col onClick={showOrHide} className="boxCategories"><img src={maquiagem} />Esteticista</Col>
            </Row>
          </Container>
        </div>
      </div >
    </body>
  );
}

export default Categories;