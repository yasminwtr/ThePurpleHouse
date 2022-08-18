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

function Categories() {
  return (
    <body className="body-categories">
    <div className="page">
      <div className="containerCategories">
        <Container className="categories">
          <h1 className="titleContainerCategories">
            Selecione a categoria do serviço que está procurando
          </h1>
          <Row>
            <Col className="boxCategories"><img src={electrician} />Eletricista</Col>
            <Col className="boxCategories"><img src={clean} />Diarista</Col>
            <Col className="boxCategories"><img src={gardening} />Jardinagem</Col>
            <Col className="boxCategories"><img src={baby} />Babá</Col>
          </Row>
          <Row>
            <Col className="boxCategories"><img src={terapia} />Fisioterapia</Col>
            <Col className="boxCategories"><img src={marceneiro} />Marceneiro</Col>
            <Col className="boxCategories"><img src={cozinheiro} />Cozinheiro</Col>
            <Col className="boxCategories"><img src={maquiagem} />Esteticista</Col>
          </Row>
        </Container>

      </div>

      <div className="resultCategories">
        <h1>Jardineiro</h1>

        <div className="containerSearch">
          <Box className="inputSearch" sx={{ '& > :not(style)': { m: 0.1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <PlaceIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="Onde?" variant="standard" />
            </Box>
          </Box>
          <button className="buttonSearch">Buscar</button>
        </div>
      </div>
    </div >
  </body>
  );
}

export default Categories;