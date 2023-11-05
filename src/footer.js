import React from "react";
// import facebook from './images/Facebook_Logo_(2019).png';
// import instagram from './images/instalogo.png';
// import telegram from './images/telegram-logo.png';
// import whatsapp from './images/png-transparent-computer-icons-logo-whatsapp-whatsapp-text-logo-whatsapp-icon-thumbnail.png';
import "./footer.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <section className="footer-section">
        <Container  className="footercontainer">
          <div className="mainfooter">
            <div className="footer">
              <div className="footer1">
                <h3 style={{ color: "red" }}>business</h3>
                <ul>
                  <li>about</li>
                  <li>testimonials</li>
                  <li>books</li>
                  <li>docs</li>
                </ul>
              </div>

              <div className="footer2">
                <h3 style={{ color: "red" }}>company</h3>
                <ul>
                  <li>address</li>
                  <li>about</li>
                  <li>services</li>
                  <li>contact</li>
                </ul>
              </div>

              <div className="footer3">
                <h3 style={{ color: "red" }}>social media</h3>

                <ul>
                  <li>
                  <FontAwesomeIcon icon={faFacebook} />
                    <a href="/"  style={{color:"white", textDecoration:"none"}}>facebook</a>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faInstagram} />
                    <a href="/"  style={{color:"white", textDecoration:"none"}}>instagram</a>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faTelegram} />
                    <a href="/"  style={{color:"white", textDecoration:"none"}}>telegram</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <a href="/" style={{color:"white", textDecoration:"none"}}>whatsapp</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-below">
              <h5 style={{textAlign:"center", marginTop:"20px"}}>
                @Copyright 2023 unknown Solutions Pvt. Ltd. 
              </h5>
              <h5 style={{textAlign:"center"}}>All Rights Reserved</h5>
              <h6 style={{textAlign:"center"}}>PRIVACY POLICY | TERMS & CONDITIONS</h6>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
