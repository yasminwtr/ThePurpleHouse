import React, { useState, useEffect } from 'react'
import "./styles.css"
import electrician from '../../assets/img/electrician.png'
import clean from "../../assets/img/clean.png"
import gardening from "../../assets/img/gardening.png"
import baby from "../../assets/img/baby.png"
import terapia from '../../assets/img/terapia.png'
import marceneiro from '../../assets/img/marcenaria.png'
import cozinheiro from '../../assets/img/chef.png'
import maquiagem from '../../assets/img/maquiagem.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import ResultCategories from './boxResultCategories'
import Grid from '@mui/material/Unstable_Grid2';

function Categories() {
  const [showElement, setShowElement] = useState(false)
  const showOrHide = () => setShowElement(true)
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    selectedCategory != null ? setShowElement(true) : setShowElement(false)
  }, [selectedCategory])

  const categories = [
    {
      title: 'Eletricista',
      img: electrician,
      id: 1
    }, {
      title: 'Diarista',
      img: clean,
      id: 2
    }, {
      title: 'Jardinagem',
      img: gardening,
      id: 3
    }, {
      title: 'Babá',
      img: baby,
      id: 4
    }, {
      title: 'Fisioterapia',
      img: terapia,
      id: 5
    }, {
      title: 'Marceneiro',
      img: marceneiro,
      id: 6
    }, {
      title: 'Cozinheiro',
      img: cozinheiro,
      id: 7
    }, {
      title: 'Esteticista',
      img: maquiagem,
      id: 8
    }
  ];

  return (
    <body>
      <div className="page">
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
            {categories.map((category, index) => (
              <Grid className="grid-categories" xs={2} key={index}>
                <Col xs={8} onClick={() => setSelectedCategory(category.id)} className={`boxCategories ${selectedCategory === category.id ? 'boxSelected' : null}`}>
                  <img className='imgBoxCategories' src={category.img} />
                  <p>{category.title}</p>
                  <p className='p-boxCategories'>Ver mais</p>
                </Col>
              </Grid>
            ))}
          </Grid>
        </div>
      </div >
    </body>
  );
}

export default Categories;