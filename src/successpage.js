
import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <section style={{height:"1000px"}}>
      <Container style={{color:'green', justifyContent:"center", textAlign:'center'}}>
        <h3 style={{marginTop:"100px"}}>Hello Sign up done Successfully</h3>
        <Button as={Link} to ="/">Go back</Button>
      </Container>
    </section>
  );
};

export default SuccessPage;

