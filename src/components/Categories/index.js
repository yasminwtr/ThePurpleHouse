import "./styles.css"

import electrician from "../assets/electrician.png"
import user from "../assets/user.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { RiMapPin2Line } from 'react-icons/ri';
import { RiMapPin2Fill } from 'react-icons/ri';

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

import PlaceIcon from '@mui/icons-material/Place';

function Categories() {
  return (
    <div>
      <Navbar className="headerCategories">
        <Container fluid>
          <Navbar.Brand href="#">S|R</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title >
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1"><img width={40} src={user} /></Nav.Link>
                <Nav.Link className="buttonMessages" href="#action2">Mensagens</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <div className="containerCategories">
        <Container className="categories">
          <h1 className="TextContainerCategories">
            Selecione a categoria do serviço que está procurando
          </h1>
          <Row>
            <Col className="boxCategories"><img src={electrician} />Eletricista</Col>
            <Col className="boxCategories"><img src={electrician} />Eletricista</Col>
            <Col className="boxCategories"><img src={electrician} />Eletricista</Col>
            <Col className="boxCategories"><img src={electrician} />Eletricista</Col>
          </Row>
          <Row>
            <Col className="boxCategories"><img src={electrician} />Eletricista</Col>
            <Col className="boxCategories"><img src={electrician} />Eletricista</Col>
            <Col className="boxCategories"><img src={electrician} />Eletricista</Col>
            <Col className="boxCategories"><img src={electrician} />Eletricista</Col>
          </Row>
        </Container>

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

      </div>
      <div className="footerCategories">
        <div>
          <a>Ícone</a>
          <a>Home</a>
          <a>Serviços</a>
          <a>Quem somos</a>
        </div>
      </div>

    </div >
  );
}

export default Categories;