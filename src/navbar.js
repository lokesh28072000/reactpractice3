import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import {  Row, Col, Button,Container } from "react-bootstrap";
import { Link } from 'react-router-dom';


function OffcanvasExample() {
    const expand = "lg"; // Set the desired size for the navbar
  
    return (
   <>

<Navbar expand={expand} className="navbackground mb-3">
<Container fluid >
  <Navbar.Brand href="#" >Pure water management</Navbar.Brand>
  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
  <Navbar.Offcanvas
    id={`offcanvasNavbar-expand-${expand}`}
    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
    placement="end"
  >
    <Offcanvas.Header closeButton>
      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
        dummy text
      </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Nav className="justify-content-end flex-grow-1 pe-3 ">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/about" >About Us</Nav.Link>
        <Nav.Link as={Link} to="/services">Services</Nav.Link>
        <Nav.Link as={Link} to="/contact" >Contact</Nav.Link> 

        

     
{/* 
         <NavDropdown
          title="Dropdown"
          id={`offcanvasNavbarDropdown-expand-${expand}`}
        >
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        </NavDropdown>  */}
         <NavDropdown 
          title="Dropdown" 
          id={`offcanvasNavbarDropdown-expand-${expand} ` } className="custom-dropdown"
        > 
        
          <Row style={{ width: "100%" }}>
            <Col>
              <NavDropdown.Item  as={Link} to="/home">Action</NavDropdown.Item>
            </Col>
            <Col>
              <NavDropdown.Item as={Link} to="/home">
                Another action
              </NavDropdown.Item>
            </Col>
            <Col>
              <NavDropdown.Item as={Link} to="/home">
                Something else here
              </NavDropdown.Item>
            </Col>
          </Row>
        </NavDropdown>
      </Nav>
     
         <Button className="navbutton" as={Link} to ="/signup">sign up here </Button>
      
    </Offcanvas.Body>
  </Navbar.Offcanvas>
</Container>
</Navbar>
</>
    )
}

export default OffcanvasExample;