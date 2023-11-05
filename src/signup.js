// // Signup.js
// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Signup = () => {
 

//   return (
//     <>
//       <section style={{margin:'100px 0 100px 0'}}>
       
//         <Container>
//         <h3 >Sign Up with us for regular updates!</h3>
//           <Row>
//             <Col>
//               <Form>
//                 <Form.Group
//                   className="mb-3 "
//                   controlId="formBasicUserName"
//                   required
//                 >
//                   <Form.Label>UserName</Form.Label>
//                   <Form.Control type="username" placeholder="Username" />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control type="email" placeholder="Enter email" />
//                   <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.
//                   </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control type="password" placeholder="Password" />
//                 </Form.Group>

//                 <Button variant="primary" type="submit" as={Link} to = "/successpage">
//                   Submit
//                 </Button>
//               </Form>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default Signup;


// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     let valid = true;
//     let newErrors = {};

//     if (!formData.username) {
//       newErrors.username = "Username is required";
//       valid = false;
//     }

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//       valid = false;
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Navigate to the success page
//       window.location.href = "/successpage";
//     }
//   };

//   return (
//     <>
//       <section style={{ margin: "100px 0 100px 0" }}>
//         <Container>
//           <h3>Sign Up with us for regular updates!</h3>
//           <Row>
//             <Col>
//               <Form>
//                 <Form.Group className="mb-3 " controlId="formBasicUserName">
//                   <Form.Label>UserName</Form.Label>
//                   <Form.Control
//                     type="username"
//                     placeholder="Username"
//                     onChange={(e) =>
//                       setFormData({ ...formData, username: e.target.value })
//                     }
//                   />
//                   {errors.username && (
//                     <p style={{ color: "red" }}>{errors.username}</p>
//                   )}
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                   />
//                   {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
//                   <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.
//                   </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Password"
//                     onChange={(e) =>
//                       setFormData({ ...formData, password: e.target.value })
//                     }
//                   />
//                   {errors.password && (
//                     <p style={{ color: "red" }}>{errors.password}</p>
//                   )}
//                 </Form.Group>

//                 <Button variant="primary" onClick={handleSubmit} as={Link} to="/successpage">
//                   Submit
//                 </Button>
//               </Form>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default Signup;



// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";

// const Signup = () => {
//   const history = useHistory();

//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     let valid = true;
//     let newErrors = {};

//     if (!formData.username) {
//       newErrors.username = "Username is required";
//       valid = false;
//     }

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//       valid = false;
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Navigate to the success page
//       history.push("/successpage");
//     }
//   };

//   return (
//     <>
//       <section style={{ margin: "100px 0 100px 0" }}>
//         <Container>
//           <h3>Sign Up with us for regular updates!</h3>
//           <Row>
//             <Col>
//               <Form>
//                 <Form.Group className="mb-3 " controlId="formBasicUserName">
//                 <Form.Label>UserName</Form.Label>
//                   <Form.Control
//                     type="username"
//                     placeholder="Username"
//                     onChange={(e) =>
//                       setFormData({ ...formData, username: e.target.value })
//                     }
//                   />
//                   {errors.username && (
//                     <p style={{ color: "red" }}>{errors.username}</p>
//                   )}
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                   />
//                   {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
//                   <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.
//                   </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Password"
//                     onChange={(e) =>
//                       setFormData({ ...formData, password: e.target.value })
//                     }
//                   />
//                   {errors.password && (
//                     <p style={{ color: "red" }}>{errors.password}</p>
//                   )}
//                 </Form.Group>

//                 <Button variant="primary" onClick={handleSubmit}>
//                   Submit
//                 </Button>
//               </Form>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default Signup;





// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     let valid = true;
//     let newErrors = {};

//     if (!formData.username) {
//       newErrors.username = "Username is required";
//       valid = false;
//     }

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//       valid = false;
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Redirect to the success page
//       window.location.href = "/successpage";
//     }
//   };

//   return (
//     <>
//       <section style={{ margin: "100px 0 100px 0" }}>
//         <Container>
//           <h3>Sign Up with us for regular updates!</h3>
//           <Row>
//             <Col>
//               <Form>
//                 <Form.Group className="mb-3 " controlId="formBasicUserName">
//                 <Form.Label>UserName</Form.Label>
//                   <Form.Control
//                     type="username"
//                     placeholder="Username"
//                     onChange={(e) =>
//                       setFormData({ ...formData, username: e.target.value })
//                     }
//                   />
//                   {errors.username && (
//                     <p style={{ color: "red" }}>{errors.username}</p>
//                   )}
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                   />
//                   {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
//                   <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.
//                   </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Password"
//                     onChange={(e) =>
//                       setFormData({ ...formData, password: e.target.value })
//                     }
//                   />
//                   {errors.password && (
//                     <p style={{ color: "red" }}>{errors.password}</p>
//                   )}
//                 </Form.Group>

//                 <Button variant="primary" onClick={handleSubmit} as={Link} to ="/">
//                   Submit
//                 </Button>
//               </Form>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the success page
    window.location.href = "/successpage";
  };

  return (
    <>
      <section style={{ margin: "100px 0 100px 0" }}>
        <Container>
          <h3>Sign Up with us for regular updates!</h3>
          <Row>
            <Col>
              <Form>
                <Form.Group className="mb-3 " controlId="formBasicUserName"  >
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }  required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    } required
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }  required
                  />
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit}   as={Link} to="/successpage">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Signup;
