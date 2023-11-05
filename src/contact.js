// import { useState } from 'react';
// import { Container, Form, Button, Col, Row } from 'react-bootstrap';
// import contactpagebannerimg2 from './contactpagebannerimg2.jpg';
// import './contact.css';

// function Contact() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     address1: '',
//     address2: '',
//     city: '',
//     state: '',
//     zip: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Check if all fields are filled
//     for (const key in formData) {
//       if (formData[key] === '') {
//         alert('Please fill out all fields');
//         return;
//       }
//     }
//     // Perform actions with form data, such as sending it to a server
//     console.log(formData);
//     alert('Submitted successfully our team will get back to you soon');
//   };

//   return (
//     <section>
//       <Container fluid className="contactpagecontainer1">
//         <img src={contactpagebannerimg2} alt="img" />
//         <Row>
//           <Col></Col>
//         </Row>
//       </Container>
//       <Container style={{ marginTop: '60px', marginBottom: '60px' }}>
//         <Form onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group as={Col} controlId="formGridEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//           </Row>

//           <Form.Group className="mb-3" controlId="formGridAddress1">
//             <Form.Label>Address</Form.Label>
//             <Form.Control
//               placeholder="1234 Main St"
//               name="address1"
//               value={formData.address1}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formGridAddress2">
//             <Form.Label>Address 2</Form.Label>
//             <Form.Control
//               placeholder="Apartment, studio, or floor"
//               name="address2"
//               value={formData.address2}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Row className="mb-3">
//             <Form.Group as={Col} controlId="formGridCity">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridState">
//               <Form.Label>State</Form.Label>
//               <Form.Select
//                 defaultValue="Choose..."
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 required
//               >
//                 <option>TamilNadu</option>
//                 <option>Karnataka</option>
//                 <option>Telugana</option>
//                 <option>kerala</option>
//               </Form.Select>
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridZip">
//               <Form.Label>Zip</Form.Label>
//               <Form.Control
//                 name="zip"
//                 value={formData.zip}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//           </Row>

//           <Form.Group className="mb-3" id="formGridCheckbox">
//             <Form.Check type="checkbox" label="Check me out" />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </Container>
//     </section>
//   );
// }

// export default Contact;




import { useState } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import contactpagebannerimg2 from './contactpagebannerimg2.jpg';
import './contact.css';

function Contact() {
  const initialFormData = {
    email: '',
    password: '',
    address1: '',
    address2: '',
    city: '',
    state: 'TamilNadu', // Set a default value for the state
    zip: '',
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    for (const key in formData) {
      if (formData[key] === '' || formData[key] === 'Choose...') {
        alert('Please fill out all fields');
        return;
      }
    }
    // Perform actions with form data, such as sending it to a server
    console.log(formData);
    alert('Submitted successfully. Our team will get back to you soon.');
    setFormData({ ...initialFormData }); // Clear form data after submission
  };

  return (
    <section>
      <Container fluid className="contactpagecontainer1">
        <img src={contactpagebannerimg2} alt="img" />
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <Container style={{ marginTop: '60px', marginBottom: '60px' }}>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              placeholder="Apartment, studio, or floor"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="TamilNadu">TamilNadu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Telugana">Telugana</option>
                <option value="Kerala">Kerala</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;
