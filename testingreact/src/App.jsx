
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import  {Footer}  from "./components/footer";
import Header from './components/header';

import "./App.css"


import MyCard from './components/MyCard';

function App() {
    return (
    <>
   <div>
    <Header nombre="Adopta un Perrito">
    </Header>
    <Container fluid>
    <Row>
    <Col>
    <MyCard
              nombre="Moby"
              url={"https://placedog.net/650/480?random"}
              texto="Puedo ser tu amigo incondicional, solo alimentame, sacame a paciar y alimentame"
              colorFondo="success"
              tagTexto="Adoptar"
            />
    </Col>
    <Col>
    <MyCard
              nombre="Albert"
              url={"https://placedog.net/640/480?r"}
              texto="Soy de naturaleza noble y bondadoza, sere siempre tu mejor amigo!"
              colorFondo="success"
              tagTexto="Adoptar"
            />
    </Col>
    <Col>
    <MyCard
              nombre="Niko"
              url={"https://placedog.net/506"}
              texto="Aqui estoy para servirte,soy tu fiel compañero!"
              colorFondo="warning"
              tagTexto="Comprar"
            />
    </Col>
    <Col>
    <MyCard
              nombre="Mika"
              url={"https://placedog.net/500"}
              texto="Vamos juntos a explorar el mundo como mejores amigos!"
              colorFondo="danger"
              tagTexto="Adoptado"
            />
    </Col>
    <Col>
    <MyCard
              nombre="Rayo"
              url={"https://placedog.net/530"}
              texto="Siempre podras confiar en mi, sere tu hombro, tu soporte en todo momento!"
              colorFondo="success"
              tagTexto="Adoptar"
            />
    </Col>
    <Col>
    <MyCard
              nombre="Kim"
              url={"https://placedog.net/510"}
              texto="Naci para cuidarte y amarte incondicionalmente!"
              colorFondo="warning"
              tagTexto="Comprar"
            />
    </Col>
    </Row>
    </Container>
    <Footer footerTexto="Te ofrecemos una gran variedad de perros que están a tu disposición, diferentes razas, tamaños y colores, elige el de tu preferencia.Todos son cariñosos y saludables." />
    
   </div>
    </>
    );
    }
    export default App;