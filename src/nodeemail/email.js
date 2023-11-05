const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/send-email', (req, res) => {
  const { email, subject, text } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lokesh07sankar@gmail.com',
      pass: 'your_password',
    },
  });

  let mailOptions = {
    from: 'your_email@gmail.com',
    to: email,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred: ', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ', info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
