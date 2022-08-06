import "./styles.css"
// import electrician from "../assets/electrician.png"
// import gardening from "../assets/gardening.png"
// import babysitter from "../assets/babysitter.png"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import { Icon, Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


<body>


  <link
    async
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
  />
  <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>
  <script src="like_button.js"></script>

</body>
function Categories() {
  return (
    <div className="containerCategories">
      {/* <header className="headerCategories">
        HEADER
      </header> */}
      <Container className="categories">
        <h1 className="TextContainerCategories">
          Selecione a categoria do serviço que está procurando
        </h1>
        <Row>
          <Col className="boxCategories">Categoria 1</Col>
          <Col className="boxCategories">Categoria 2</Col>
          <Col className="boxCategories">Categoria 1</Col>
          <Col className="boxCategories">Categoria 2</Col>
        </Row>
        <Row>
          <Col className="boxCategories">Categoria 3</Col>
          <Col className="boxCategories">Categoria 4</Col>
          <Col className="boxCategories">Categoria 3</Col>
          <Col className="boxCategories">Categoria 4</Col>
        </Row>
      </Container>

      <div className="resultCategories">
        <h1>Jardineiro</h1>
        <input className="inputSearch" type={'text'} placeholder='Onde?' />
         <button className="buttonSearch">Buscar</button>
      </div>

      {/* <div className="footerCategories">
        <a>Ícone</a>
        <a>Home</a>
        <a>Serviços</a>
        <a>Quem somos</a>
      </div> */}

    </div>
  );
}

export default Categories;