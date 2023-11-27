import Card from 'react-bootstrap/Card';

import Tages from './Tags';

const MyCard = ({ url, nombre, texto, colorFondo, tagTexto }) => {
    return (
      <>
        <Card className="text-center" style={{ width: "20rem", margin:"1rem" }}>
          <Card.Img variant="top" src={url} alt={nombre} />
          <Card.Body>
            <Card.Title >{nombre}</Card.Title>
            <Card.Text>{texto}</Card.Text>
          </Card.Body>
          <Tages  colorFondo={colorFondo}tagTexto={tagTexto}></Tages >
        </Card>
        
      </>
    );
  };
  
  export default MyCard;