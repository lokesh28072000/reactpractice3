import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./App.css";
import { Row, Col, Card } from "react-bootstrap";
import container1homecard1img from "./container1homecard1image.jpg";

import section2card2 from "./section2card2.jpg";
import section2card3 from "./section2card3.jpg";
import section2card1 from "./section2card4.jpg";
import section2card4 from "./section2card2.jpg";
import sliderim3 from "./sliderimg3.jpg";
import { Carousel } from "react-bootstrap";

function Mainapp() {
  // Set the desired size for the navbar

  return (
    <>
      {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

      {/* ---------------------------container 1 homepage----------------------- */}
      <section className="sectionbg">
        <Container className="container1home">
          <Row>
            <Col className="container1homecol1">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                deleniti. Tempora sit rerum earum cupiditate adipisci ipsa
                excepturi asperiores voluptatum natus at. Tenetur voluptatum
                minus libero necessitatibus qui obcaecati nulla.
              </h4>
            </Col>

            {/* c---------column2------------- */}
            <Col className="container1homecol2">
              <img src={container1homecard1img} alt="" />
            </Col>
          </Row>

          <Row style={{ marginTop: "40px" }}>
            <Col>
              <p style={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit commodi culpa amet, minus unde rem deserunt officia at
                modi corrupti iusto omnis quasi repudiandae laboriosam
                recusandae! Molestias reprehenderit assumenda laboriosam.lorem
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat natus aliquid autem unde laboriosam laborum quod ipsum,
                repudiandae saepe. Voluptatibus ex eius possimus temporibus
                architecto voluptate nemo assumenda consequuntur accusantium.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* -----section2------- */}

      <section className="section2">
        <Container className="section2container1">
          <Row>
            <Col>
              <h1 style={{ color: "white" }}>Projects</h1>
            </Col>
          </Row>

          {/* -------------------------------------CARDROW1-------------------- */}
          <Row>
            <Col>
              <Card
                className="section2container1row2card animated-card"
                style={{ border: "none" }}
              >
                <Card.Img variant="top" src={section2card2} />
                <Card.Body className="bg-primary">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    <p style={{ color: "white" }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card
                className="section2container1row2card animated-card"
                style={{ border: "none" }}
              >
                <Card.Img variant="top" src={section2card2} />
                <Card.Body className="bg-primary">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    <p style={{ color: "white" }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* ---------------------------------ROW2--------------------------- */}

          <Row>
            <Col>
              <Card
                className="section2container1row2card  animated-card"
                style={{ border: "none" }}
              >
                <Card.Img variant="top" src={section2card3} />
                <Card.Body className="bg-primary">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    <p style={{ color: "white" }}>
                      {" "}
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card
                className="section2container1row2card  animated-card"
                style={{ border: "none" }}
              >
                <Card.Img variant="top" src={section2card3} />
                <Card.Body className="bg-primary">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    <p style={{ color: "white" }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum
            vero quidem, quod adipisci nisi voluptates aut porro pariatur velit,
            voluptatibus excepturi alias consectetur dolorum ad sint, a maxime
            necessitatibus.
          </h6> */}
        </Container>
      </section>

      {/* --------------section3--------------- */}

      <section className="section3">
        <Container>
          <Row>
            <Col>
              <h2>WATER MANAGEMENT</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                ipsum vero quidem, quod adipisci nisi voluptates aut porro
                pariatur velit, voluptatibus excepturi alias consectetur dolorum
                ad sint, a maxime necessitatibus.
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>OUR BRAND</h2>
              <ol>
                <li>Pure</li>
                <li>Natural</li>
                <li>Hi-Tech Purification</li>
                <li>Hi-Tech Plant </li>
                <li>River Water</li>
              </ol>
            </Col>
          </Row>

          {/* <--------------------SLIDER>----------------------- */}

          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={section2card1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p style={{ color: "white" }}>
                      
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={sliderim3}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p style={{ color: "white" }}>
                     
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={section2card4}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p style={{ color: "white" }}>
                      
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Mainapp;
