
import Badge from "react-bootstrap/Badge";

const Tages = ({colorFondo, tagTexto }) => {
    return (
      <h5>
        <Badge  bg={colorFondo}>{tagTexto}
        </Badge>
      </h5>
    );
  };
  
  export default Tages;
