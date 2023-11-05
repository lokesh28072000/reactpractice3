// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();
// const port = 5000;
// const cors = require('cors');



// app.use(cors()); // Enable CORS for all routes

// app.get('/test', (req, res) => {
//   res.send('Server is connected');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// app.get('/test', (req, res) => {
//     res.send('Server is connected');
//   });
  
// const cors = require('cors');
// app.use(cors());

// app.use(express.json());

// app.post('/send-email', (req, res) => {
//   const { email, subject, text } = req.body;

//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'lokesh07sankar@gmail.com',
//       pass: 'lokesh2807@millionaire',
//     },
//   });

//   let mailOptions = {
//     from: 'lokesh07sankar@gmail.com',
//     to: email,
//     subject: subject,
//     text: text,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error occurred: ', error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent: ', info.response);
//       res.send('Email sent successfully');
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
