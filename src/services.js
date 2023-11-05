import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import './services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faWater } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <>
      <section>
        <Container className="servicescontainer1">
          <Row>
            <Col> <h2 style={{textAlign:"center"}}>Our Services <FontAwesomeIcon icon={faWater} /></h2></Col>
          </Row>
        </Container>

        <Container className="servicescontainer2">
          <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> 
    
    </Col>
    <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> 
    
    </Col>
    <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> 
    
    </Col>

    <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> 
    
    </Col>
          </Row>




          {/* -------------------------row2--------------------- */}
          <Row style={{marginTop:"40px"}}>
            <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> 
    
    </Col>
    <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> 
    
    </Col>
    <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> 
    
    </Col>

    <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> 
    
    </Col>
          </Row>
        </Container>


{/* 
        ------------------------textcontainer------------------------------- */}

        <Container>
          <Row>
            <Col>
            <h4>PROJECTS</h4>
            </Col>
          </Row>
          <Row>
            <Col>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Blanditiis nihil iste maiores. Sed quibusdam nulla veniam hic fugit
               temporibus ab perspiciatis. Tenetur velit sequi libero odio voluptas mollitia quas. Illum?
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Blanditiis nihil iste maiores. Sed quibusdam nulla veniam hic fugit
               temporibus ab perspiciatis. Tenetur velit sequi libero odio voluptas mollitia quas. Illum?</p>
               <Button>click here to more projects</Button>
            </Col>
          </Row>
          <br /><br />
        </Container>
      </section>
    </>
  );
}
